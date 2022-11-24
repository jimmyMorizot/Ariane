<?php

namespace App\Security\Voter;

use App\Entity\Post;
use App\Entity\User;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class PostVoter extends Voter
{
    public const POST_DELETE = 'POST_DELETE';
    public const POST_EDIT = 'POST_EDIT';
    public const POST_NEW = 'POST_NEW';

    // Je récupére les informations de sécurité en privé
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    protected function supports(string $attribute, $subject): bool
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, [self::POST_DELETE, self::POST_EDIT, self::POST_NEW])
            && $subject instanceof \App\Entity\Post;
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // pour forcer l'autocompletion sur un objet
        /**
         * @var Post $post
         */
        $post = $subject;

        // on vérifie si l'utilisateur est un user (la hiérachie fait le reste)
        if ($this->security->isGranted('ROLE_USER')) return true;

        // on vérifie si la candidature a un propriétaire
        if (null === $post->getUser()) return false;

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case self::POST_DELETE:
                // on vérifie si on peut créer une candidature
                return $this->canDelete($post, $user);

                break;

            case self::POST_EDIT:
                // on vérifie si on peut modifier la candidature
                return $this->canEdit($post, $user);

                break;

            case self::POST_NEW:
                return $this->canNew($post, $user);

                break;
        }

        return false;
    }

    private function canDelete(Post $post, User $user)
    {
        // le propriétaire créer une candidature
        return $user === $post->getUser();
    }

    private function canEdit(Post $post, User $user)
    {
        // le propriétaire de la candidature peut la modifier
        return $user === $post->getUser();
    }

    private function canNew(Post $post, User $user)
    {
        // l'utilisateur connecté peut créer une candidature
        return $user === $post->getUser();
    }
}
