<?php

namespace App\Controller\Api;

use App\Entity\Candidacy;
use App\Repository\CandidacyRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CandidacyController extends AbstractController
{
    /**
     * Get Candidacy Collection
     * 
     * @Route("/api/candidacies", name="app_api_candidacies_get_collection", methods={"GET"})
     */
    public function getCandidaciesCollection(CandidacyRepository $candidacyRepository): JsonResponse
    {
        // TODO Groups must be distributed in Entities Annotation if candidacies list is needed

        $candidacies = $candidacyRepository->findAll();

        return $this->json(
            $candidacies,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_candidacies_get_collection'
            ]
        );
    }

    /**
     * Get Candidacy item
     *
     * @Route("/api/candidacy/{id}", name="app_api_candidacy_get_item", methods={"GET"})
     */
    public function getCandidacyItem(Candidacy $candidacy = null): JsonResponse
    {
        if (null === $candidacy) {
            throw $this->createAccessDeniedException('Canndidature non trouvée');
        }

        return $this->json(
            $candidacy,
            Response::HTTP_OK,
            [],
            ['groups' => 'api_candidacy_get_item']
        );
    }

    /**
     * Create new candidacy
     *
     * @Route("api/candidacy", name="app_api_candidacy_new_item", methods={"POST"})
     */
    public function newCandidacyItem(Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator)
    {
        $jsonContent = $request->getContent();
        $candidacy = $serializer->deserialize($jsonContent, Candidacy::class, 'json');

        $errors = $validator->validate($candidacy);

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
        $manager->persist($candidacy);
        $manager->flush();

        return $this->json(
            $candidacy,
            Response::HTTP_CREATED,
            [
                'Location' => $this->generateUrl('app_api_candidacy_new_item', [
                    'id' => $candidacy->getId(),
                ])
            ],
            ['groups' => 'api_candidacy_new_item']
        );
    }

    /**
     * Update Item
     * 
     * @Route("/api/candidacy/{id}", name="app_api_candidacy_patch_item", methods={"PATCH"})
     */
    public function patchcadidacyItem(Candidacy $candidacy = null, Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator)
    {
        if (null === $candidacy) {
            return $this->json(['message' => 'Candidature non trouvée.'], Response::HTTP_NOT_FOUND);
        }

        $this->denyAccessUnlessGranted('CANDIDACY_EDIT', $candidacy);

        // L'auteur de la candidature est-il le user connecté ?
        $user = $this->getUser();
        if ($user !== $candidacy->getUser()) {
            throw $this->createAccessDeniedException('Non autorisé');
        }

        $jsonContent = $request->getContent();
        $serializer->deserialize($jsonContent, Candidacy::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $candidacy]);

        $errors = $validator->validate($candidacy);

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
     * Update Candidacy if reported
     * 
     * @Route("/api/candidacy/{id}/reported", name="app_api_candidacy_reported_patch_item", methods={"PATCH"})
     */
    public function reportedCandidacyItem(Candidacy $candidacy = null, Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator)
    {
        if (null === $candidacy) {
            return $this->json(['message' => 'Candidature non trouvée.'], Response::HTTP_NOT_FOUND);
        }
        
        $reportUser = $candidacy->getUser();
        
        $jsonContent = $request->getContent();
        $serializer->deserialize($jsonContent, Candidacy::class, 'json', [AbstractNormalizer::OBJECT_TO_POPULATE => $candidacy]);

        $candidacy->setReport(true);

        $errors = $validator->validate($candidacy);

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
     * @Route("/api/candidacy/{id}", name="app_api_candidacy_delete_item", methods={"DELETE"})
     */
    public function deleteCandidacy(Candidacy $candidacy = null, CandidacyRepository $candidacyRepository)
    {

        if (null === $candidacy) {
            return $this->json(['message' => 'Candidature non trouvée.'], Response::HTTP_NOT_FOUND);
        }

        $this->denyAccessUnlessGranted('CANDIDACY_DELETE', $candidacy);

        // L'auteur de la candidature est-il le user connecté ?
        $user = $this->getUser();
        if ($user !== $candidacy->getUser()) {
            throw $this->createAccessDeniedException('Non autorisé');
        }

        $candidacyRepository->remove($candidacy, true);

        return $this->json(['message' => 'La candidature est supprimée'], Response::HTTP_OK);
    }
}
