<?php

namespace App\DataFixtures\Provider;

class AppProvider
{


    private $password = [
        // mot de pass User2022*
        '$2y$13$.CpY/QuLPkKVpcfHQgYxv.7uFdBgeVOKcq.Fcwxz6b1hcPKYdCEe.',


    ];

    private $nameAssociation = [
        'ACTION CONTRE LA FAIM',
        'ACTION D’URGENCE INTERNATIONALE',
        'AGIR ENSEMBLE POUR LES DROITS DE L’HOMME',
        'AIDE MEDICALE ET DEVELOPPEMENT',
        'AIDE MEDICALE INTERNATIONALE',
        'AMIS SANS FRONTIERES',
        'AQUASSISTANCE',
        'ARCHITECTES DE L’URGENCE',
        'ASSOCIATION AU SERVICE DE L’ACTION HUMANITAIRE',
        'ASSOCIATION POUR LA RECHERCHE ET LA MEDECINE EN AFRIQUE',
        'ASSOCIATION POUR LES ENFANTS DES RIZIERES',
        'ASSOCIATION SUISSE DES AMIS DE SŒUR EMMANUELLE',
        'AVIATION SANS FRONTIERES',
        'BIOFORCE',
        'BIOPORT',
        'CENTRALE HUMANITAIRE MEDICO-',
        'LA CHAINE DE L’ESPOIR',
        'COMITE D’AIDE MEDICALE',
        'COMITE DE SECOURS INTERNATIONAUX',
        'COMITE NATIONAL DE SOLIDARITE LAIQUE',
        'COORDINATION SUD',
        'CROIX ROUGE FRANCAISE',
        'DETACHEMENT D’INTERVENTION CONTRE LES CATASTROPHES',
        'DOULEURS SANS FRONTIERES',
        'ELECTRICIENS SANS FRONTIERES',
        'EQUIPE LEGERE D’INTERVENTION ET DE SECOUR AEROPORTEE',
        'ENFANCE ET PARTAGE',
        'ENFANTS DU MONDE',
        'ENFANTS DU MONDE, DROITS DE L’HOMME',
        'ENFANTS ET DEVELOPPEMENT',
        'ENFANTS REFUGIES DU MONDE',
        'FEDERATION NATIONALE DE PROTECTION CIVILE',
        'FONDATION DE France',
        'FRANCE ORGANISATION DE SECOURS INTERNATIONAL',
        'GROUPE DE SECOURS CATASTROPHE FRANCAIS',
        'GROUPE URD',
        'HANDICAP INTERNATIONAL',
        'HOPITAUX SANS FRONTIERES',
        'INTER AIDE',
        'L’APPEL',
        'MEDAIR',
        'MEDECINS DU MONDE',
        'MEDECINS SANS FRONTIERES',
        'MEMISA',
        'MISSION ENFANCE',
        'OEUVRES HOSPITALIERES FRANCAISES DE L’ORDRE DE MALTE',
        'TRIANGLE GENERATION HUMANITAIRE',
        'OXFAM FRANCE AGIR ICI',
        'PARRAINS DE L’ESPOIR',
        'PARTAGE',
        'PHARMACIE HUMANITAIRE INTERNATIONALE',
        'PHARMACIENS SANS FRONTIERES COMITE INTERNATIONAL',
        'POMPIERS DE L’URGENCE INTERNATIONALE',
        'POMPIERS SANS FRONTIERES',
        'PREMIERE URGENCE',
        'SANTE SUD',
        'SECOURISTES SANS FRONTIERES',
        'SECOURS CATHOLIQUE CARITAS FRANCE',
        'SECOURS ISLAMIQUE FRANCE',
        'SECOURS POPULAIRE FRANCAIS',
        'SOLIDARITES',
        'TELECOMS SANS FRONTIERES',
        'TRANSFERTS D’URGENCE DE L’INDUSTRIE PHARMACEUTIQUE',
        'TRIANGLE GENERATION HUMANITAIRE',
    ];

    private $supply = [
        'Logement',
        'Nourriture',
        'Transport',
        'Traducteur',
        'Médicaments',
        'Vetements',
        'Conducteur',
        'Accordéoniste',
    ];

    private $category = [
        'Medical',
        'Refuge sans abris',
        'Transport de marchandise',
        'Transport de personne',
        'Aide juridique',
        'Enfance',
        'Handicap',
        'Aide contre la faim',
        'Assistance contre la violence',
        'Telecom',
    ];

    private $pictureUrl = [
        '/images/bedroom.jpg',
        '/images/blacksmith.jpg',
        '/images/clothes.jpg',
        '/images/food.jpg',
        '/images/handling.jpg',
        '/images/house.jpg',
        '/images/mech.jpg',
        '/images/medical.jpg',
        '/images/tools.jpg',
        '/images/transport.jpg',
    ];

     private $pictureAssociation = [
        '/images/profile1.jpg',
        '/images/profile2.jpg',
        '/images/profile3.jpg',
        '/images/profile4.jpg',
        '/images/profile5.jpg',
        '/images/profile6.jpg',
        '/images/profile7.jpg',
        '/images/profile8.jpg',
        '/images/profile9.jpg',
        '/images/profile10.jpg',
        '/images/avataaars1.png',
        '/images/avataaars2.png',
        '/images/avataaars3.png',
        '/images/avataaars4.png',
        '/images/avataaars5.png',
        '/images/avataaars6.png',
        '/images/avataaars7.png',
        '/images/avataaars8.png'
    ];
    private $pictureVolunteer = [
        '/images/avataaars1.png',
        '/images/avataaars2.png',
        '/images/avataaars3.png',
        '/images/avataaars4.png',
        '/images/avataaars5.png',
        '/images/avataaars6.png',
        '/images/avataaars7.png',
        '/images/avataaars8.png'
    ];


    private $country = [
        'France'
    ];

    public function category()
    {
        return $this->category[array_rand($this->category)];
    }

    public function supply()
    {
        return $this->supply[array_rand($this->supply)];
    }

    public function nameAssociation()
    {
        return $this->nameAssociation[array_rand($this->nameAssociation)];
    }

    public function password()
    {
        return $this->password[array_rand($this->password)];
    }

    public function pictureUrl()
    {
        return $this->pictureUrl[array_rand($this->pictureUrl)];
    }

    public function pictureAssociation()
    {
        return $this->pictureAssociation[array_rand($this->pictureAssociation)];
    }

    public function pictureVolunteer()
    {
        return $this->pictureVolunteer[array_rand($this->pictureVolunteer)];
    }

    public function country()
    {
        return $this->country[array_rand($this->country)];
    }
}
