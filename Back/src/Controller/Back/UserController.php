<?php

namespace App\Controller\Back;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/back/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="app_back_user_index", methods={"GET"})
     */
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('back/user/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    // // /**
    // //  * @Route("/association", name="app_back_user_association_list", methods={"GET"})
    // //  */
    // // public function indexUserAssociation(UserRepository $userRepository): Response
    // // {
    // //     $profil = 'Association';

    // //     return $this->render('back/user/index.html.twig', [
    // //         'users' => $userRepository->findAllAssociation($profil),
    // //     ]);
    // // }

    // // /**
    // //  * @Route("/volunteer", name="app_back_user_volunteer_list", methods={"GET"})
    // //  */
    // // public function indexUserVolunteer(UserRepository $userRepository): Response
    // // {
    // //     $profil = 'Volontaire';

    // //     return $this->render('back/user/index.html.twig', [
    // //         'users' => $userRepository->findAllVolunteer($profil),
    // //     ]);
    // // }

    // // /**
    // //  * @Route("/administrator", name="app_back_user_administrator_list", methods={"GET"})
    // //  */
    // // public function indexUserAdministrator(UserRepository $userRepository): Response
    // // {
    // //     $profil = 'admin';

    // //     return $this->render('back/user/index.html.twig', [
    // //         'users' => $userRepository->findAllAdministrator($profil),
    // //     ]);
    // // }



    /**
     * @Route("/user/new", name="app_back_user_new", methods={"GET", "POST"})
     */
    public function new(Request $request, UserRepository $userRepository, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // on hâche le mot de passe
            $hashedPassword = $passwordHasher->hashPassword($user, $user->getPassword());
            // on écrase le mot de passe dans le User
            $user->setPassword($hashedPassword);

            $userRepository->add($user, true);

            $this->addFlash('success', 'Utilisateur ajouté.');

            return $this->redirectToRoute('app_back_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/user/new.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_back_user_show", methods={"GET"})
     */
    public function show(User $user): Response
    {
        $categories = $user->getCategory();

        return $this->render('back/user/show.html.twig', [
            'user' => $user,
            'categories' => $user->getCategory(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="app_back_user_edit", methods={"GET", "POST"})
     */
    public function edit(Request $request, User $user, UserRepository $userRepository, UserPasswordHasherInterface $passwordHasher): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // on hâche le mot de passe
            $hashedPassword = $passwordHasher->hashPassword($user, $user->getPassword());
            // on écrase le mot de passe dans le User
            $user->setPassword($hashedPassword);
            $userRepository->add($user, true);

            $this->addFlash('success', 'Utilisateur modifié.');

            return $this->redirectToRoute('app_back_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="app_back_user_delete", methods={"POST"})
     */
    public function delete(Request $request, User $user, UserRepository $userRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $userRepository->remove($user, true);
        }

        $this->addFlash('success', 'Utilisateur supprimé.');

        return $this->redirectToRoute('app_back_user_index', [], Response::HTTP_SEE_OTHER);
    }
}
