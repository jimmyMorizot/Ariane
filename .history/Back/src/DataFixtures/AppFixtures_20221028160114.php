<?php

namespace App\DataFixtures;

use Faker;
use Doctrine\DBAL\Connection;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Faker\Factory;

class AppFixtures extends Fixture
{
    /**
     * Les propriétés qui vont accueillir les services nécessaires à la classe de Fixtures
     */
    private $connection;

    /**
     * On récupère les services utiles via le constructeur
     */
    public function __construct(Connection $connection)
    {
        // On récupère la connexion à la BDD (DBAL ~= PDO)
        // pour exécuter des requêtes manuelles en SQL pur
        $this->connection = $connection;
    }

    /**
     * Permet de TRUNCATE les tables et de remettre les AUTO_INCREMENT à 1
     */
    private function truncate()
    {
        // On passe en mode SQL ! On cause avec MySQL
        // Désactivation la vérification des contraintes FK
        $this->connection->executeQuery('SET foreign_key_checks = 0');
        // On tronque
        $this->connection->executeQuery('TRUNCATE TABLE post');
        $this->connection->executeQuery('TRUNCATE TABLE category');
        $this->connection->executeQuery('TRUNCATE TABLE candidacy');
        $this->connection->executeQuery('TRUNCATE TABLE supply');
        $this->connection->executeQuery('TRUNCATE TABLE user_category');
        $this->connection->executeQuery('TRUNCATE TABLE user');
    }

    public function load(ObjectManager $manager): void
    {
        // On TRUNCATE manuellement
        $this->truncate();

        // ! config du faker et du populator
        $faker = Faker\Factory::create('fr_FR');
        $faker->addProvider(new AppProvider());

        // pour avoir toujours les mêmes résultats
        // @link https://fakerphp.github.io/#seeding-the-generator
        $faker->seed('11102022');

        // Nos users
        $admin = new User();
        $admin->setEmail('admin@admin.com');
        $admin->setRoles(['ROLE_ADMIN']);
        // bin/console security:hash-password => admin
        $admin->setPassword('$2y$13$/LRHx9AA56jotW5UV40BjeB1N5NU4zkMyD34lOv8Lb8ozBDVpbh2u');

        // /!\ la variable $manager est déjà existante en paramètre de la méthode load() !
        $managerUser = new User();
        $managerUser->setEmail('manager@manager.com');
        $managerUser->setRoles(['ROLE_MANAGER']);
        // bin/console security:hash-password => manager
        $managerUser->setPassword('$2y$13$A30us9hMs04OMDrp387iiOzgpyN1RxWhQNE3DcFwsNhN9O0DYugdW');

        $user = new User();
        $user->setEmail('user@user.com');
        $user->setRoles(['ROLE_USER']);
        // bin/console security:hash-password => user
        $user->setPassword('$2y$13$OX9RoBNejyEYZaMx9JmR8Ogw5AIDWPRSmrwmf8To9fv6CuiFa4r2C');

        $manager->persist($admin);
        $manager->persist($managerUser);
        $manager->persist($user);

        $populator = new Populator($faker, $manager);

        $manager->flush();
    }
}
