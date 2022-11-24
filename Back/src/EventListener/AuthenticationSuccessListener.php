<?php

namespace App\EventListener;

use App\Entity\Category;
use App\Entity\User;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class AuthenticationSuccessListener
{

    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

        $data['data'] = array(
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'profil' => $user->getProfil(),
            'name' => $user->getName(),
            'firstname' => $user->getFirstname(),
            'lastname' => $user->getLastname(),
            'description' => $user->getDescription(),
            'address' => $user->getAddress(),
            'city' => $user->getCity(),
            'postCode' => $user->getPostCode(),
            'country' => $user->getCountry(),
            'phoneNumber' => $user->getPhoneNumber(),
            'slug' => $user->getSlug(),
            'citySlug' => $user->getCitySlug(),
            'picture' => $user->getPicture(),
            'category' => $user->getCategory(),
        );

        $event->setData($data);
    }
}
