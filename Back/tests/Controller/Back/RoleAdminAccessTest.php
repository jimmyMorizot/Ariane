<?php

namespace App\Tests;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RoleAdminAccessTest extends WebTestCase
{
    /**
     * Routes en GET pour ROLE_ADMIN
     * 
     * @dataProvider getUrls
     */
    public function testPageGetIsSuccessful($url)
    {
        // On crée un client
        $client = static::createClient();

        // Le Repo des Users
        $userRepository = static::getContainer()->get(UserRepository::class);
        // On récupère admin@admin.com
        $testUser = $userRepository->findOneByEmail('admin@admin.com');
        // simulate $testUser being logged in
        $client->loginUser($testUser);

        // On exécute la requête APRES être loggué
        $client->request('GET', $url);

        // Le ROLE_ADMIN aura un status code 200
        $this->assertResponseStatusCodeSame(200);
    }

    public function getUrls()
    {
        yield ['/back/user/'];
        yield ['/back/user/4'];
        yield ['/back/supply/'];
        yield ['/back/supply/new'];
        yield ['/back/post/'];
        yield ['/back/post/12'];
        yield ['/back/category/'];
        //yield ['/back/category/1'];
        yield ['/back/category/new'];
        //yield ['/back/category/1/edit'];
        yield ['/back/candidacy/'];
        yield ['/back/candidacy/13'];
    }
}
