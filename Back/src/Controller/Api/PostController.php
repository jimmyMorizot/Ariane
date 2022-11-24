<?php

namespace App\Controller\Api;

use App\Entity\Post;
use App\Repository\PostRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PostController extends AbstractController
{
    /**
     * Get Collection
     * 
     * @Route("/api/posts", name="app_api_posts_get_collection", methods={"GET"})
     */
    public function getPostsCollection(PostRepository $postRepository): JsonResponse
    {
        // TODO return limited list 

        $users = $postRepository->findPostLimit();

        return $this->json(
            $users,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_posts_get_collection'
            ]
        );
    }

    /**
     * Get Post item 
     *
     * @Route("/api/post/{id}", name="app_api_post_get_item", methods={"GET"})
     */
    public function getPostItem(Post $post = null): JsonResponse
    {
        if (null === $post) {
            throw $this->createAccessDeniedException('Annonce non trouvée');
        }

        return $this->json(
            $post,
            Response::HTTP_OK,
            [],
            ['groups' => 'api_post_get_item']
        );
    }

    /**
     * Create new Post
     *
     * @Route("/api/post", name="app_api_post_new_item", methods={"POST"})
     */
    public function newPostItem(Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator)
    {
        $jsonContent = $request->getContent();
        $post = $serializer->deserialize($jsonContent, Post::class, 'json');

        $errors = $validator->validate($post);

        if (count($errors) > 0) {
            $errorsClean = [];
            foreach ($errors as $error) {
                $errorsClean[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json([
                'errors' => $errorsClean
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $manager = $doctrine->getManager();
        $manager->persist($post);
        $manager->flush();

        return $this->json(
            $post,
            Response::HTTP_CREATED,
            [
                'Location' => $this->generateUrl('app_api_post_new_item', [
                    'id' => $post->getId(),
                ])
            ],
            ['groups' => 'api_post_new_item']
        );
    }

    /**
     * Update Item
     * 
     * @Route("/api/post/{id}", name="app_api_post_patch_item", methods={"PATCH"})
     */
    public function patchPostItem(Post $post = null, Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator)
    {
        if (null === $post) {
            return $this->json(['message' => 'Article non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $this->denyAccessUnlessGranted('POST_EDIT', $post);

        // L'auteur de l'annonce' est-il le user connecté ?
        $user = $this->getUser();
        if ($user !== $post->getUser()) {
            throw $this->createAccessDeniedException('Non autorisé');
        }

        $jsonContent = $request->getContent();
        $serializer->deserialize($jsonContent, Post::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $post]);

        $errors = $validator->validate($post);

        if (count($errors) > 0) {

            $errorsClean = [];

            /** @var ConstraintViolation $error */
            foreach ($errors as $error) {
                $errorsClean[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json([
                'errors' => $errorsClean
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $manager = $doctrine->getManager();
        $manager->flush();

        return $this->json(null, Response::HTTP_OK);
    }

    /**
     * Update Post if reported
     * 
     * @Route("/api/post/{id}/reported", name="app_api_post_reported_patch_item", methods={"PATCH"})
     */
    public function reportedPostItem(Post $post = null, Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator)
    {
        if (null === $post) {
            return $this->json(['message' => 'Candidature non trouvée.'], Response::HTTP_NOT_FOUND);
        }
        
        $jsonContent = $request->getContent();
        $serializer->deserialize($jsonContent, Post::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $post]);

        $post->setReport(true);

        $errors = $validator->validate($post);

        if (count($errors) > 0) {

            $errorsClean = [];

            /** @var ConstraintViolation $error */
            foreach ($errors as $error) {
                $errorsClean[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json([
                'errors' => $errorsClean
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $manager = $doctrine->getManager();
        $manager->flush();

        return $this->json(null, Response::HTTP_OK);
    }

    /**
     * Delete Item
     *
     * @Route("/api/post/{id}", name="app_api_post_delete_item", methods={"DELETE"})
     */
    public function deletePostItem(Post $post = null, PostRepository $postRepository)
    {
        if (null === $post) {
            return $this->json(['message' => 'Article non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $this->denyAccessUnlessGranted('POST_DELETE', $post);

        // L'auteur de l'annonce est-il le user connecté ?
        $user = $this->getUser();
        if ($user !== $post->getUser()) {
            throw $this->createAccessDeniedException('Non autorisé');
        }

        $postRepository->remove($post, true);

        return $this->json(['message' => 'Article supprimé'], Response::HTTP_OK);
    }
}
