<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Category;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class)
            ->add('roles', ChoiceType::class, [
                'label' => 'Rôles',
                'choices' => [
                    'Administrateur' => 'ROLE_ADMIN',
                    'Modérateur' => 'ROLE_MODERATOR',
                    'Utilisateur' => 'ROLE_USER'
                ],
                'multiple' => true,
                'expanded' => true,
            ])
            ->add('password', PasswordType::class, [
                'help' => 'Le mot de passe doit contenir au moins: huit caractères dont une lettre, un chiffre et un caractère spécial(@$!%*?&)',
            ])
            ->add('profil', ChoiceType::class, [
                'label' => 'Profil',
                'choices' => [
                    '' => '',
                    'Administrateur' => 'Admin',
                    'Association' => 'Association',
                    'Volontaire' => 'Volontaire'
                ]
            ])
            //->add('name')
            ->add('firstname', TextType::class, [
                'label' => 'Prénom',
                //'empty_data' => '',
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Nom',
                //'empty_data' => '',
            ])
            ->add('address', TextType::class, [
                'label' => 'Adresse'
            ])
            ->add('city', TextType::class, [
                'label' => 'Ville'
            ])
            ->add('postCode', TextType::class, [
                'label' => 'Code postal'
            ])
            ->add('country', CountryType::class, [
                'label' => 'Pays',
                'multiple' => false,

            ])
            ->add('phoneNumber', TextType::class, [
                'label' => 'Numéro de téléphone'
            ])
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('c')
                        ->orderBy('c.name', 'ASC');
                },
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            // pas de validation HTML5
            'attr' => [
                'novalidate' => 'novalidate',
            ]
        ]);
    }
}
