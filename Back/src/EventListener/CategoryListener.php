<?php

namespace App\EventListener;

use App\Entity\Category;
use App\Service\MySlugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class CategoryListener
{
    private $mySlugger;

    public function __construct(MySlugger $mySlugger)
    {
        $this->mySlugger = $mySlugger;
    }

    // the entity listener methods receive two arguments:
    // the entity instance and the lifecycle event
    public function updateSlug(Category $category, LifecycleEventArgs $event): void
    {
        // on slugifie nos enités via notre service
        $category->setSlug($this->mySlugger->slugify($category->getName()));
    }
}
