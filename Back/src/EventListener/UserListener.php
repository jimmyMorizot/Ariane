<?php

namespace App\EventListener;

use App\Entity\User;
use App\Service\MySlugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class UserListener
{
    private $mySlugger;

    public function __construct(MySlugger $mySlugger)
    {
        $this->mySlugger = $mySlugger;
    }

    // the entity listener methods receive two arguments:
    // the entity instance and the lifecycle event
    public function updateSlug(User $user, LifecycleEventArgs $event): void
    {
        // entity slugified via our service
        // if our user is an association, we need to sluggify the name
        $name = $user->getName();
        if (isset($name)) {
            $user->setSlug($this->mySlugger->slugify($user->getName()));
        }
        $user->setCitySlug($this->mySlugger->slugify($user->getCity()));
    }
}
