<?php

namespace App\Security\Voter;

use App\Entity\User;
use App\Entity\Candidacy;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class CandidacyVoter extends Voter
{
    public const CANDIDACY_DELETE = 'CANDIDACY_DELETE';
    public const CANDIDACY_EDIT = 'CANDIDACY_EDIT';
    public const CANDIDACY_NEW = 'CANDIDACY_NEW';

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
        return in_array($attribute, [self::CANDIDACY_DELETE, self::CANDIDACY_EDIT, self::CANDIDACY_NEW])
            && $subject instanceof \App\Entity\Candidacy;
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
         * @var Candidacy $candidacy
         */
        $candidacy = $subject;

        // on vérifie si l'utilisateur est un user (la hiérachie fait le reste)
        if ($this->security->isGranted('ROLE_USER')) return true;

        // on vérifie si la candidature a un propriétaire
        if (null === $candidacy->getUser()) return false;

        // ... (check conditions and return true to grant permission) ...
        switch ($attribute) {
            case self::CANDIDACY_DELETE:
                // on vérifie si on peut créer une candidature
                return $this->canDelete($candidacy, $user);

                break;

            case self::CANDIDACY_EDIT:
                // on vérifie si on peut modifier la candidature
                return $this->canEdit($candidacy, $user);

                break;

            case self::CANDIDACY_NEW:
                return $this->canNew($candidacy, $user);

                break;
        }

        return false;
    }

    private function canDelete(Candidacy $candidacy, User $user)
    {
        // le propriétaire créer une candidature
        return $user === $candidacy->getUser();
    }

    private function canEdit(Candidacy $candidacy, User $user)
    {
        // le propriétaire de la candidature peut la modifier
        return $user === $candidacy->getUser();
    }

    private function canNew(Candidacy $candidacy, User $user)
    {
        // l'utilisateur connecté peut créer une candidature
        return $user === $candidacy->getUser();
    }
}
