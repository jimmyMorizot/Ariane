<?php

namespace App\Controller\Api;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryController extends AbstractController
{
    /**
     * Get Categories Collection only
     * 
     * Json provide:
     * Category (id, name, slug).
     * 
     * @Route("/api/select/categories", name="app_api_categories_get_collection_only", methods={"GET"})
     */
    public function getCategoriesCollectionOnly(CategoryRepository $categoryRepository): JsonResponse
    {
        $categories = $categoryRepository->findAll();

        return $this->json(
            $categories,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_categories_get_collection_only'
            ]
        );
    }

    /**
     * Get Categories Collection
     * 
     * Json provide:
     * Category (name, slug, related Users). // 
     * Related User (profil, name, description, address, city, postCode, country, phoneNumber, slug, citySlug)
     * 
     * @Route("/api/categories", name="app_api_categories_get_collection", methods={"GET"})
     */
    public function getCategoriesCollection(CategoryRepository $categoryRepository): JsonResponse
    {
        $categories = $categoryRepository->findAll();

        return $this->json(
            $categories,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_categories_get_collection'
            ]
        );
    }

    /**
     * Get Category Item
     * 
     * Json provide:
     * Category (name, slug, related Users). // 
     * Related User (profil, name, description, address, city, postCode, country, phoneNumber, slug, citySlug)
     *
     * @Route("/api/category/{id}" , name="app_api_category_get_item", methods={"GET"})
     */
    public function getCategoryItem(Category $category = null): JsonResponse
    {
        if (null === $category) {
            throw $this->createAccessDeniedException('Catégorie non trouvée');
        }

        return $this->json(
            $category,
            Response::HTTP_OK,
            [],
            [
                'groups' => 'api_category_get_item'
            ]
        );
    }
   
    /**
     * Get Item
     * 
     * @Route("/api/category/{id}/association", name="app_api_get_association_by_category", methods={"GET"})
     */
    public function getAssociationByCategory(Category $category = null): JsonResponse
    {
        if (null === $category) {
            throw $this->createNotFoundException('Categorie non trouvée');
        }

        return $this->json(
            $category->getUsers(),
            Response::HTTP_OK,
            [],
            ['groups' => 'api_associations_get_collection']
        );
    }

    /**
     * Create new category
     *
     * @Route("/api/category", name="app_api_category_new_item", methods={"POST"})
     */
    public function newCategoryItem(Request $request, SerializerInterface $serializer, ManagerRegistry $doctrine, ValidatorInterface $validator)
    {
        $jsonContent = $request->getContent();
        $category = $serializer->deserialize($jsonContent, Category::class, 'json');

        $errors = $validator->validate($category);

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
        $manager->persist($category);
        $manager->flush();

        return $this->json(
            $category,
            Response::HTTP_CREATED,
            [
                'Location' => $this->generateUrl('app_api_category_new_item', [
                    'id' => $category->getId(),
                ])
            ],
            ['groups' => 'api_category_new_item']
        );
    }
}
