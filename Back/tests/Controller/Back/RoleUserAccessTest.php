<?php

namespace App\Tests\Controller\Back;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RoleUserAccessTest extends WebTestCase
{
    /**
     * Routes en GET pour ROLE_USER
     * 
     * @dataProvider getUrls
     */
    public function testPageGetIsRedirect($url)
    {
        // On crée un client
        $client = static::createClient();

        // Le Repo des Users
        $userRepository = static::getContainer()->get(UserRepository::class);
        // On récupère user@user.com
        $testUser = $userRepository->findOneByEmail('paul.pruvost@example.net');
        // simulate $testUser being logged in
        $client->loginUser($testUser);

        // On exécute la requête APRES être loggué
        $client->request('GET', $url);

        // Le ROLE_USER aura un status code 403
        $this->assertResponseStatusCodeSame(403);
    }

    public function getUrls()
    {
        yield ['/back/user'];
        yield ['/back/user/4'];
        yield ['/back/supply'];
        yield ['/back/supply/new'];
        yield ['/back/post'];
        yield ['/back/post/12'];
        yield ['/back/category'];
        //yield ['/back/category/1'];
        yield ['/back/category/new'];
        //yield ['/back/category/1/edit'];
        yield ['/back/candidacy'];
        yield ['/back/candidacy/13'];
    }
}
