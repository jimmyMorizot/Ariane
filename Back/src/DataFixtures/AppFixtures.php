<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Post;
use App\Entity\User;
use App\Entity\Supply;
use App\Entity\Category;
use App\Entity\Candidacy;
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
        // truncate manually
        $this->truncate();

        //! config faker and populator
        $faker = Faker\Factory::create('fr_FR');
        $faker->addProvider(new AppProvider());

        // always get the same results
        $faker->seed('28102022');

        $populator = new Populator($faker, $manager);

        //! admin
        // Create an admin account
        $admin = new User();
        $admin->setProfil('Admin');
        $admin->setEmail('admin@admin.com');
        $admin->setFirstname('admin');
        $admin->setLastname('admin');
        $admin->setAddress($faker->secondaryAddress());
        $admin->setPostCode($faker->departmentNumber());
        $admin->setCity($faker->departmentName());
        $admin->setCountry($faker->country());
        $admin->setPassword('$2y$13$e0vVqctR8jmHv7HPWoOf8eCLjkd/sERsk/JlLuuQgsOBAsjbSfHkS'); // password : admin
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setCreatedAt($faker->dateTime('now'));


        $manager->persist($admin);

        //! user
        // $populator->addEntity(User::class, 20, [
        //     'profil' => function () {
        //         $profil = rand(0, 1) ? "Association" : "Volontaire";
        //         return $profil;
        //     },
        //     'name' => function () use ($faker) {
        //         return $faker->unique()->nameAssociation();
        //     },
        //     'description' => function () use ($faker) {
        //         return $faker->paragraph();
        //     },
        //     'firstname' => function () use ($faker) {
        //         return $faker->firstname();
        //     },
        //     'lastname' => function () use ($faker) {
        //         return $faker->lastname();
        //     },
        //     'address' => function () use ($faker) {
        //         return $faker->secondaryAddress();
        //     },
        //     'postCode' => function () use ($faker) {
        //         return $faker->departmentNumber();
        //     },
        //     'city' => function () use ($faker) {
        //         return $faker->departmentName();
        //     },
        //     'country' => function () use ($faker) {
        //         return $faker->country();
        //     },
        //     'phoneNumber' => function () use ($faker) {
        //         return $faker->mobileNumber();
        //     },
        //     'email' => function () use ($faker) {
        //         return $faker->unique()->safeEmail();
        //     },
        //     'password' => function () use ($faker) {
        //         return $faker->password();
        //     },
        //     'report' => function () {
        //         return false;
        //     },
        //     'picture' => function () use ($faker) {
        //         if ($profil = 'Association') {    
        //         return $faker->pictureAssociation();
        //         }else {
        //             return $faker->pictureVolunteer();
        //         }
        //     },
        //     'createdAt' => function () use ($faker) {
        //         return $faker->dateTimeBetween('-1 month', '+1 month');
        //     },
        // ]);

        // //! supply
        // $populator->addEntity(Supply::class, 8, [
        //     'name' => function () use ($faker) {
        //         return $faker->unique()->supply();
        //     },
        //     'pictureUrl' => function () use ($faker) {
        //         return $faker->unique()->pictureUrl();
        //     },
        //     'createdAt' => function () use ($faker) {
        //         return $faker->dateTimeBetween('-1 month', '+1 month');
        //     },
        // ]);

        // //! post
        // $populator->addEntity(Post::class, 80, [
        //     'title' => function () use ($faker) {
        //         return $faker->sentence(6);
        //     },
        //     'description' => function () use ($faker) {
        //         return $faker->paragraph();
        //     },
        //     'report' => function () {
        //         return false;
        //     },
        //     'nbAnswer' => function () use ($faker) {
        //         return $faker->numberBetween(0, 20);
        //     },
        //     'createdAt' => function () use ($faker) {
        //         return $faker->dateTimeBetween('-6 week', '-3 week');
        //     },
        //     'updatedAt' => function () use ($faker) {
        //         return $faker->dateTimeBetween('-1 week', 'now');
        //     },
        //     'picture' => function () use ($faker) {
        //         return $faker->pictureUrl();
        //     },
        // ]);

        // //! candidacy
        // $populator->addEntity(Candidacy::class, 50, [
        //     'content' => function () use ($faker) {
        //         return $faker->paragraph();
        //     },
        //     'report' => function () {
        //         return false;
        //     },
        //     'createdAt' => function () use ($faker) {
        //         return $faker->dateTimeBetween('-3 week', 'now');
        //     },
        // ]);

        // //! category
        // $populator->addEntity(Category::class, 10, [
        //     'name' => function () use ($faker) {
        //         return $faker->unique()->category();
        //     },
        //     'createdAt' => function () use ($faker) {
        //         return $faker->dateTimeBetween('-1 month', 'now');
        //     },
        // ]);

        // //! user_category
        // // here, it's an array with all the objects added in the database
        // $insertedItems = $populator->execute();

        // // creation of an empty array
        // $categories = [];
        // // put category objects in categories array
        // foreach ($insertedItems['App\Entity\Category'] as $category) {
        //     $category->__construct();
        //     $categories[] = $category;
        // }
        // // foreach on users and add categories 
        // foreach ($insertedItems['App\Entity\User'] as $user) {
        //     $user->__construct();
        //     // shuffle the categories array
        //     shuffle($categories);
        //     // add one category to the user with addcategory()
        //     $user->addCategory($categories[0]);
        // }

        $manager->flush();
    }
}
