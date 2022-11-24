<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\User;
use Doctrine\DBAL\Connection;
use Faker\ORM\Doctrine\Populator;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\Provider\AppProvider;
use Doctrine\Bundle\FixturesBundle\Fixture;

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
        // on récupère la connexion à la BDD (DBAL ~= PDO)
        $this->connection = $connection;
    }

    /**
     * Allows to reset the AUTO_INCREMENT to 1
     */
    private function truncate()
    {
        // désactivation la vérification des contraintes Foreign Keys
        $this->connection->executeQuery('SET foreign_key_checks = 0');
        // truncate
        $this->connection->executeQuery('TRUNCATE TABLE post');
        $this->connection->executeQuery('TRUNCATE TABLE category');
        $this->connection->executeQuery('TRUNCATE TABLE candidacy');
        $this->connection->executeQuery('TRUNCATE TABLE supply');
        $this->connection->executeQuery('TRUNCATE TABLE user_category');
        $this->connection->executeQuery('TRUNCATE TABLE user');
    }

    public function load(ObjectManager $manager): void
    {
        // on TRUNCATE manuellement
        $this->truncate();

        // ! config du faker et du populator
        $faker = Faker\Factory::create('fr_FR');
        $faker->addProvider(new AppProvider());

        // always get the same results
        $faker->seed('28102022');

        $admin = new User();
        $admin->setEmail('admin@admin.com');
        $admin->setRole(['ROLE_ADMIN']);
        // bin/console security:hash-password => admin
        $admin->setPassword('admin');

        $manager->persist($admin);
        /* $manager->persist($managerUser);
        $manager->persist($user); */

        $populator = new Populator($faker, $manager);

        //!USER
        // for an Association
        $populator->addEntity(User::class, 20, [
            'profil' => function () use ($faker) {
                return $faker->unique()->profilAssociation();
            },
            'name' => function () use ($faker) {
                return $faker->unique()->name();
            },
            'description' => function () use ($faker) {
                return $faker->unique()->paragraph();
            },
            'address' => function () use ($faker) {
                return $faker->secondaryAddress();
            },
            'post_code' => function () use ($faker) {
                return $faker->departmentNumber();
            },
            'city' => function () use ($faker) {
                return $faker->departmentName();
            },
            'country' => function () use ($faker) {
                return $faker->region();
            },
            'phone_number' => function () use ($faker) {
                return $faker->phoneNumber();
            },
            'email' => function () use ($faker) {
                return $faker->safeEmail();
            },
            'password' => function () use ($faker) {
                return $faker->unique()->password();
            },
            'picture' => function () {
                return "https://picsum.photos/id/" . mt_rand(1000, 1100) . "/200/300";
            },
        ]);

        // for a volunteer
        $populator->addEntity(User::class, 20, [
            'profil' => function () use ($faker) {
                return $faker->unique()->profilVolunteer();
            },
            'firstname' => function () use ($faker) {
                return $faker->unique()->firstname();
            },
            'lastname' => function () use ($faker) {
                return $faker->unique()->lastname();
            },
            'address' => function () use ($faker) {
                return $faker->secondaryAddress();
            },
            'post_code' => function () use ($faker) {
                return $faker->departmentNumber();
            },
            'city' => function () use ($faker) {
                return $faker->departmentName();
            },
            'country' => function () use ($faker) {
                return $faker->region();
            },
            'phone_number' => function () use ($faker) {
                return $faker->mobileNumber();
            },
            'email' => function () use ($faker) {
                return $faker->safeEmail();
            },
            'password' => function () use ($faker) {
                return $faker->unique()->password();
            },
            'picture' => function () {
                return "https://picsum.photos/id/" . mt_rand(1000, 1100) . "/200/300";
            },
        ]);



        $manager->flush();
    }
}
