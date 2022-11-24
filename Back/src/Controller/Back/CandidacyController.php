<?php

namespace App\Controller\Back;

use App\Entity\Candidacy;
use App\Form\CandidacyType;
use App\Repository\CandidacyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/back/candidacy")
 */
class CandidacyController extends AbstractController
{
    /**
     * @Route("/", name="app_back_candidacy_index", methods={"GET"})
     */
    public function index(CandidacyRepository $candidacyRepository): Response
    {
        return $this->render('back/candidacy/index.html.twig', [
            'candidacies' => $candidacyRepository->findCandidacyByCreatedAt(),
        ]);
    }

    //! function kept for futur versions
    // /* *
    //  * @Route("/new", name="app_back_candidacy_new", methods={"GET", "POST"})
    //  */
    // public function new(Request $request, CandidacyRepository $candidacyRepository): Response
    // {
    //     $candidacy = new Candidacy();
    //     $form = $this->createForm(CandidacyType::class, $candidacy);
    //     $form->handleRequest($request);

    //     if ($form->isSubmitted() && $form->isValid()) {
    //         $candidacyRepository->add($candidacy, true);

    //         return $this->redirectToRoute('app_back_candidacy_index', [], Response::HTTP_SEE_OTHER);
    //     }

    //     return $this->renderForm('back/candidacy/new.html.twig', [
    //         'candidacy' => $candidacy,
    //         'form' => $form,
    //     ]);
    // }

    /**
     * @Route("/{id}", name="app_back_candidacy_show", methods={"GET"})
     */
    public function show(Candidacy $candidacy): Response
    {
        return $this->render('back/candidacy/show.html.twig', [
            'candidacy' => $candidacy,
            'candidacyAuthor' => $candidacy->getUser(),
            'post' => $candidacy->getPost(),
            'postAuthor' => $candidacy->getpost()->getUser(),


        ]);
    }

    /**
     * @Route("/{id}/unreport", name="app_back_candidacy_unreport", methods={"GET", "POST"})
     */
    public function unreport(Request $request, Candidacy $candidacy, CandidacyRepository $candidacyRepository): Response
    {
        $candidacy->setReport(false);

        $candidacyRepository->add($candidacy, true);
        $this->addFlash('success', 'Signalement annulé.');

        return $this->redirectToRoute('app_back_candidacy_index', [], Response::HTTP_SEE_OTHER);
    }

    //! function kept for futur versions
    // // /**
    // //  * @Route("/{id}/edit", name="app_back_candidacy_edit", methods={"GET", "POST"})
    // //  */
    // // public function edit(Request $request, Candidacy $candidacy, CandidacyRepository $candidacyRepository): Response
    // // {
    // //     $form = $this->createForm(CandidacyType::class, $candidacy);
    // //     $form->handleRequest($request);

    // //     if ($form->isSubmitted() && $form->isValid()) {
    // //         $candidacyRepository->add($candidacy, true);

    // //         return $this->redirectToRoute('app_back_candidacy_index', [], Response::HTTP_SEE_OTHER);
    // //     }

    // //     return $this->renderForm('back/candidacy/edit.html.twig', [
    // //         'candidacy' => $candidacy,
    // //         'form' => $form,
    // //     ]);
    // // }

    /**
     * @Route("/{id}", name="app_back_candidacy_delete", methods={"POST"})
     */
    public function delete(Request $request, Candidacy $candidacy, CandidacyRepository $candidacyRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $candidacy->getId(), $request->request->get('_token'))) {
            $candidacyRepository->remove($candidacy, true);
        }

        $this->addFlash('success', 'Candidature supprimée.');

        return $this->redirectToRoute('app_back_candidacy_index', [], Response::HTTP_SEE_OTHER);
    }
}
