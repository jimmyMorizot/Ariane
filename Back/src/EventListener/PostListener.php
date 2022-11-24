<?php

namespace App\EventListener;

use App\Entity\Post;
use App\Service\MySlugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class PostListener
{
    private $mySlugger;

    public function __construct(MySlugger $mySlugger)
    {
        $this->mySlugger = $mySlugger;
    }

    // the entity listener methods receive two arguments:
    // the entity instance and the lifecycle event
    public function updateSlug(Post $post, LifecycleEventArgs $event): void
    {
        // on slugifie nos enités via notre service
        $post->setSlug($this->mySlugger->slugify($post->getTitle()));
    }
}
