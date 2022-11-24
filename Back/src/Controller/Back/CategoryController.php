<?php

namespace App\Controller\Back;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/back/category")
 */
class CategoryController extends AbstractController
{
    /**
     * @Route("/", name="app_back_category_index", methods={"GET"})
     */
    public function index(CategoryRepository $categoryRepository): Response
    {
        return $this->render('back/category/index.html.twig', [
            'categories' => $categoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="app_back_category_new", methods={"GET", "POST"})
     */
    public function new(Request $request, CategoryRepository $categoryRepository): Response
    {
        $category = new Category();
        $form = $this->createForm(CategoryType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $categoryRepository->add($category, true);

            $this->addFlash('success', 'Catégorie ajoutée.');

            return $this->redirectToRoute('app_back_category_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/category/new.html.twig', [
            'category' => $category,
            'form' => $form,
        ]);
    }

    //! function ketp for future versions
    // // /**
    // //  * @Route("/{id}", name="app_back_category_show", methods={"GET"})
    // //  */
    // // public function show(Category $category): Response
    // // {
    // //     return $this->render('back/category/show.html.twig', [
    // //         'category' => $category,
    // //     ]);
    // // }

    //! function ketp for future versions
    // // /**
    // //  * @Route("/{id}/edit", name="app_back_category_edit", methods={"GET", "POST"})
    // //  */
    // // public function edit(Request $request, Category $category, CategoryRepository $categoryRepository): Response
    // // {
    // //     $form = $this->createForm(CategoryType::class, $category);
    // //     $form->handleRequest($request);

    // //     if ($form->isSubmitted() && $form->isValid()) {
    // //         $categoryRepository->add($category, true);

    // //         return $this->redirectToRoute('app_back_category_index', [], Response::HTTP_SEE_OTHER);
    // //     }

    // //     return $this->renderForm('back/category/edit.html.twig', [
    // //         'category' => $category,
    // //         'form' => $form,
    // //     ]);
    // // }

    /**
     * @Route("/{id}", name="app_back_category_delete", methods={"POST"})
     */
    public function delete(Request $request, Category $category, CategoryRepository $categoryRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$category->getId(), $request->request->get('_token'))) {
            $categoryRepository->remove($category, true);
        }

        $this->addFlash('success', 'Catégorie supprimée.');

        return $this->redirectToRoute('app_back_category_index', [], Response::HTTP_SEE_OTHER);
    }
}
