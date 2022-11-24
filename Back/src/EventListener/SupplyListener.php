<?php

namespace App\EventListener;

use App\Entity\Supply;
use App\Service\MySlugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class SupplyListener
{
    private $mySlugger;

    public function __construct(MySlugger $mySlugger)
    {
        $this->mySlugger = $mySlugger;
    }

    // the entity listener methods receive two arguments:
    // the entity instance and the lifecycle event
    public function updateSlug(Supply $supply, LifecycleEventArgs $event): void
    {
        $name = $supply->getName();
        if (isset($name)) {
            $supply->setSlug($this->mySlugger->slugify($supply->getName()));
        }
        // on slugifie nos enités via notre service
        //$supply->setSlug($this->mySlugger->slugify($supply->getName()));
    }
}
