<?php

namespace App\Controller\Back;

use App\Entity\Post;
use App\Form\PostType;
use App\Repository\CandidacyRepository;
use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/back/post")
 */
class PostController extends AbstractController
{
    /**
     * @Route("/", name="app_back_post_index", methods={"GET"})
     */
    public function index(PostRepository $postRepository): Response
    {
        return $this->render('back/post/index.html.twig', [
            'posts' => $postRepository->findPostByCreatedAt(),

        ]);
    }

    //! function kept for future versions
    // // /**
    // //  * @Route("/new", name="app_back_post_new", methods={"GET", "POST"})
    // //  */
    // // public function new(Request $request, PostRepository $postRepository): Response
    // // {
    // //     $post = new Post();
    // //     $form = $this->createForm(PostType::class, $post);
    // //     $form->handleRequest($request);

    // //     if ($form->isSubmitted() && $form->isValid()) {
    // //         $postRepository->add($post, true);

    // //         return $this->redirectToRoute('app_back_post_index', [], Response::HTTP_SEE_OTHER);
    // //     }

    // //     return $this->renderForm('back/post/new.html.twig', [
    // //         'post' => $post,
    // //         'form' => $form,
    // //     ]);
    // // }

    /**
     * @Route("/{id}", name="app_back_post_show", methods={"GET"})
     */
    public function show(Post $post): Response
    {
        $candidacies = $post->getCandidacies();

        return $this->render('back/post/show.html.twig', [
            'post' => $post,
            'postAuthor' => $post->getUser(),
            'candidacies' => $post->getCandidacies(),
        ]);
    }

    /**
     * @Route("/{id}/unreport", name="app_back_post_unreport", methods={"GET", "POST"})
     */
    public function unreport(Request $request, Post $post, PostRepository $postRepository): Response
    {
        $post->setReport(false);

        $postRepository->add($post, true);
        
        $this->addFlash('success', 'Signalement annulé.');

        return $this->redirectToRoute('app_back_post_index', [], Response::HTTP_SEE_OTHER);
    }

    //! function kept for future versions
    // // /**
    // //  * @Route("/{id}/edit", name="app_back_post_edit", methods={"GET", "POST"})
    // //  */
    // // public function edit(Request $request, Post $post, PostRepository $postRepository): Response
    // // {
    // //     $form = $this->createForm(PostType::class, $post);
    // //     $form->handleRequest($request);

    // //     if ($form->isSubmitted() && $form->isValid()) {
    // //         $postRepository->add($post, true);

    // //         return $this->redirectToRoute('app_back_post_index', [], Response::HTTP_SEE_OTHER);
    // //     }

    // //     return $this->renderForm('back/post/edit.html.twig', [
    // //         'post' => $post,
    // //         'form' => $form,
    // //     ]);
    // // }

    /**
     * @Route("/{id}", name="app_back_post_delete", methods={"POST"})
     */
    public function delete(Request $request, Post $post, PostRepository $postRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $post->getId(), $request->request->get('_token'))) {
            $postRepository->remove($post, true);
        }

        $this->addFlash('success', 'Annonce supprimée.');

        return $this->redirectToRoute('app_back_post_index', [], Response::HTTP_SEE_OTHER);
    }
}
