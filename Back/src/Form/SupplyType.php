<?php

namespace App\Form;

use App\Entity\Supply;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SupplyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom'
            ]);
        //->add('slug')
        //->add('createdAt');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Supply::class,
            // pas de validation HTML5
            'attr' => [
                'novalidate' => 'novalidate',
            ]
        ]);
    }
}
