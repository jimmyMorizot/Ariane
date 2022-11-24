<?php

namespace App\Controller\Api;

use App\Entity\Supply;
use App\Repository\SupplyRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SupplyController extends AbstractController
{
    /**
     * Get Supplies Collection
     * 
     * Json Provide:
     * Supply (name, slug, related Posts). //
     * Related Posts (title, description, createdAt, related User). //
     * Related User (profil, name)
     * 
     * @Route("/api/supplies", name="app_api_supplies_get_collection", methods={"GET"})
     */
    public function getSuppliesCollection(SupplyRepository $supplyRepository): JsonResponse
    {
        $supplies = $supplyRepository->findAll();

        return $this->Json(
            $supplies,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_supplies_get_collection'
            ]
        );
    }

    /**
     * Get Supply Item
     * 
     * Json Provide:
     * Supply (name, slug, related Posts). //
     * Related Posts (title, description, createdAt, related User). //
     * Related User (profil, name)@Groups({"api_candidacy_get_item"})
     *
     * @Route("api/supply/{id}", name="app_api_supply_get_collection", methods={"GET"})
     */
    public function getSupplyItem(Supply $supply = null): JsonResponse
    {
        if (null === $supply) {
            throw $this->createAccessDeniedException('Fourniture non trouvée');
        }

        return $this->Json(
            $supply,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_supply_get_item'
            ]
        );
    }

    /**
     * Create new supply
     *
     * @Route("/api/supply", name="app_api_supply_new_item", methods={"POST"})
     */
    public function newSupplyItem(Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator)
    {
        $jsonContent = $request->getContent();
        $supply = $serializer->deserialize($jsonContent, Supply::class, 'json');

        $errors = $validator->validate($supply);

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
        $manager->persist($supply);
        $manager->flush();

        return $this->json(
            $supply,
            Response::HTTP_CREATED,
            [
                'Location' => $this->generateUrl('app_api_supply_new_item', [
                    'id' => $supply->getId(),
                ])
            ],
            ['groups' => 'api_supply_new_item']
        );
    }
}
