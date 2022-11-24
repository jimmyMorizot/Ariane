<?php

namespace App\Form;

use App\Entity\Post;
use App\Entity\User;
use App\Entity\Supply;
use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class PostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', null, [
                'label' => 'Titre',
                'empty_data' => '',
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'help' => '400 caractères maximum',
                'attr' => [
                    'class' => 'crud-textarea',
                ]
            ])
            //->add('nbAnswer')
            //->add('report')
            //->add('slug')
            //->add('createdAt')
            //->add('updatedAt')
            ->add('user', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'name',
                'multiple' => false,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('g')
                        ->orderBy('g.name', 'ASC');
                },
            ])
            ->add('supply', EntityType::class, [
                'class' => Supply::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('s')
                        ->orderBy('s.name', 'ASC');
                },
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }
}
