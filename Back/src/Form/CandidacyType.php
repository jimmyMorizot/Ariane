<?php

namespace App\Form;

use App\Entity\Candidacy;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CandidacyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content')
            ->add('report')
            ->add('createdAt')
            ->add('post')
            ->add('user');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Candidacy::class,
            // pas de validation HTML5
            'attr' => [
                'novalidate' => 'novalidate',
            ]
        ]);
    }
}
