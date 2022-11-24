<?php

namespace App\Controller\Api;

use App\Entity\Candidacy;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController
{
    /**
     * Get Volunteers Collection
     * 
     * @Route("/api/volunteers", name="app_api_volunteers_get_collection", methods={"GET"})
     */
    public function getVolunteersCollection(UserRepository $userRepository): JsonResponse
    {
        // TODO Groups must be distributed in Entities Annotation if volunteers list is needed

        $profil = 'Volontaire';

        $users = $userRepository->findAllVolunteer($profil);

        return $this->json(
            $users,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_volunteers_get_collection'
            ]
        );
    }

    /**
     * Get Association Collection
     * 
     * @Route("/api/associations", name="app_api_associations_get_collection", methods={"GET"})
     */
    public function getAssociationsCollection(UserRepository $userRepository): JsonResponse
    {
        // TODO return limited list 

        $profil = 'Association';

        $users = $userRepository->findAllAssociation($profil);

        return $this->json(
            $users,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_associations_get_collection'
            ]
        );
    }

    /**
     * Get Association item
     *
     * @Route ("/api/association/{id}", name="app_api_association_get_item", methods={"GET"})
     */
    public function getAssociationItem(User $user = null): JsonResponse
    {
        if (null === $user) {
            throw $this->createAccessDeniedException('Association non trouvé');
        }

        return $this->json(
            $user,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_association_get_item'
            ]
        );
    }

    /**
     * Get Volunteer item
     *
     * @Route ("/api/volunteer/{id}", name="app_api_volunteer_get_item", methods={"GET"})
     */
    public function getVolunteerItem(User $user = null): JsonResponse
    {
        if (null === $user) {
            throw $this->createAccessDeniedException('Utilisateur non trouvé');
        }

        return $this->json(
            $user,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_volunteer_get_item'
            ]
        );
    }

    /**
     * Get user candidacy
     * 
     * @Route("/api/user/{id}/candidacies", name="app_api_get_user_candidacies", methods={"GET"})
     */
    public function getUserCandidacies(User $user = null, Candidacy $candidacy): JsonResponse
    {
        if (null === $user) {
            throw $this->createNotFoundException('Utilisateur non trouvé');
        }

        return $this->json(
            $user,
            Response::HTTP_OK,
            [],
            ['groups' => 'api_user_candidacy_get_collection']
        );
    }

    /**
     * Registration
     * 
     * @Route("/api/registration", name="app_api_registration", methods={"POST"})
     */
    public function Registration(UserRepository $userRepository, Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        // get the Json
        $jsonContent = $request->getContent();

        // deserialize
        $user = $serializer->deserialize($jsonContent, User::class, 'json');

        // entity validation
        $errors = $validator->validate($user);

        // check for errors
        if (count($errors) > 0) {
            // empty errors array
            $errorsClean = [];

            /** @var ConstraintViolation $error */
            foreach ($errors as $error) {
                // put the error 
                $errorsClean[$error->getPropertyPath()][] = $error->getMessage();
            }
            return $this->json([
                'errors' => $errorsClean
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // hash
        $hashedPassword = $passwordHasher->hashPassword($user, $user->getPassword());

        // erase and replace password
        $user->setPassword($hashedPassword);

        $userRepository->add($user, true);

        // perist and flush
        $manager = $doctrine->getManager();
        $manager->persist($user);
        $manager->flush();

        return $this->json(
            $user,
            Response::HTTP_CREATED,
            [
                'Location' => $this->generateUrl('app_api_registration', [
                    'id' => $user->getId()
                ])
            ],
            ['groups' => 'api_registration']
        );
    }

    /**
     * Update Item (PATCH, modification partielle d'une entité/d'une ressource)
     * 
     * @Route("/api/user/{id}", name="app_api_user_patch_item", methods={"PATCH"})
     */
    public function patchUserItem(UserRepository $userRepository, User $user = null, Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator, UserPasswordHasherInterface $passwordHasher)
    {
        // 404 ?
        if (null === $user) {
            // return Json
            return $this->json(['message' => 'Utilisateur non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $jsonContent = $request->getContent();
        $serializer->deserialize($jsonContent, User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);

        $errors = $validator->validate($user);

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

        // hash
        $hashedPassword = $passwordHasher->hashPassword($user, $user->getPassword());

        // erase and replace password
        $user->setPassword($hashedPassword);

        $userRepository->add($user, true);



        $manager = $doctrine->getManager();
        $manager->flush();

        return $this->json(null, Response::HTTP_OK);
    }

    /**
     * Update Item if reported
     * 
     * @Route("/api/user/{id}", name="app_api_user_patch_item", methods={"PATCH"})
     */
    public function reportedUserItem(UserRepository $userRepository, User $user = null, Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator, UserPasswordHasherInterface $passwordHasher)
    {
        // 404 ?
        if (null === $user) {
            // return Json
            return $this->json(['message' => 'Utilisateur non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $jsonContent = $request->getContent();
        $serializer->deserialize($jsonContent, User::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $user]);

        $errors = $validator->validate($user);

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

        // hash
        $hashedPassword = $passwordHasher->hashPassword($user, $user->getPassword());

        // erase and replace password
        $user->setPassword($hashedPassword);

        $userRepository->add($user, true);



        $manager = $doctrine->getManager();
        $manager->flush();

        return $this->json(null, Response::HTTP_OK);
    }



    /**
     * Delete Item
     *
     * @Route("/api/user/{id}", name="app_api_user_delete_item", methods={"DELETE"})
     * 
     */
    public function deleteUser(User $user = null, UserRepository $userRepository)
    {
        // 404 /
        if (null === $user) {
            return $this->json(['message' => 'Utilisateur non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        // delete with the help of the repository function remove
        // /!\ put true in second parameter to flush directly
        $userRepository->remove($user, true);

        // return HTTP status 200
        return $this->json(['message' => 'Votre compte utilisateur a bien été supprimé'], Response::HTTP_OK);
    }
}
