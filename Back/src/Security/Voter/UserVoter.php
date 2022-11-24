<?php

namespace App\Security\Voter;

use App\Entity\User;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class UserVoter extends Voter
{
    public const USER_DELETE = 'USER_DELETE';
    public const USER_EDIT = 'USER_EDIT';

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
        return in_array($attribute, [self::USER_DELETE, self::USER_EDIT])
            && $subject instanceof \App\Entity\User;
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // on vérifie si l'utilisateur est un user (la hiérachie fait le reste)
        if ($this->security->isGranted('ROLE_USER')) return true;

        // on vérifie l'utilisateur est connecté
        if (null === $user->getUserIdentifier()) return false;

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case self::USER_DELETE:
                // on vérifie si on peut supprimer un son compte
                return $this->canDelete($subject, $user);

                break;

            case self::USER_EDIT:
                // on vérifie si on peut modifier son compte
                return $this->canEdit($subject, $user);

                break;
        }

        return false;
    }

    private function canDelete(User $user)
    {
        // le propriétaire supprime son compte
        return $user === $user->getUserIdentifier();
    }

    private function canEdit(User $user)
    {
        // le propriétaire modifier son compte
        return $user === $user->getUserIdentifier();
    }
}
