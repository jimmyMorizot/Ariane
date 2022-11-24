<?php

namespace App\Command;

use App\Repository\CategoryRepository;
use App\Repository\PostRepository;
use App\Repository\SupplyRepository;
use App\Service\MySlugger;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ArianeSlugifyCommand extends Command
{
    protected static $defaultName = 'app:ariane:slugify';
    protected static $defaultDescription = 'Slugifies entity postTitle, userName, categoryName, supplyName in the database';

    // Nos services
    private $userRepository;
    private $postRepository;
    private $supplyRepository;
    private $categoryRepository;
    private $mySlugger;
    private $entityManager;

    public function __construct(UserRepository $userRepository, PostRepository $postRepository, SupplyRepository $supplyRepository, CategoryRepository $categoryRepository, MySlugger $mySlugger, ManagerRegistry $doctrine)
    {
        $this->userRepository = $userRepository;
        $this->postRepository = $postRepository;
        $this->supplyRepository = $supplyRepository;
        $this->categoryRepository = $categoryRepository;
        $this->mySlugger = $mySlugger;
        $this->entityManager = $doctrine->getManager();

        // On appelle le constructeur parent
        parent::__construct();
    }

    protected function configure(): void
    {
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $io->info('Mise à jour des slugs');

        // Récupérer tous les users (via UserRepository)
        $users = $this->userRepository->findAll();
        // Pour chaque user
        foreach ($users as $user) {
            // On slugifie le nom de l'association avec notre service MySlugger
            $name = $user->getName();
            if (isset($name)) {
                $user->setSlug($this->mySlugger->slugify($user->getName()));
            }
            $user->setCitySlug($this->mySlugger->slugify($user->getCity()));
        }

        // post
        $posts = $this->postRepository->findAll();

        foreach ($posts as $post) {
            $post->setSlug($this->mySlugger->slugify($post->getTitle()));
        }

        // category
        $categories = $this->categoryRepository->findAll();

        foreach ($categories as $category) {
            $category->setSlug($this->mySlugger->slugify($category->getName()));
        }

        // supply
        $supplies = $this->supplyRepository->findAll();

        foreach ($supplies as $supply) {
            $supply->setSlug($this->mySlugger->slugify($supply->getName()));
        }

        // On flush (via l'entityManager)
        $this->entityManager->flush();

        $io->success('Les slugs ont été mis à jour');

        return Command::SUCCESS;
    }
}
