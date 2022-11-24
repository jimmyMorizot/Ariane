<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AnonymousAccessTest extends WebTestCase
{
    /**
     * Routes en GET pour Anonymous
     * 
     * @dataProvider getUrls
     */
    public function testPageGetIsRedirect($url)
    {
        $client = self::createClient();
        $client->request('GET', $url);

        // on teste que l'anonyme se prend une redirection
        $this->assertResponseRedirects();
    }

    public function getUrls()
    {
        yield ['/back/user'];
        yield ['/back/user/4'];
        yield ['/back/supply'];
        yield ['/back/supply/new'];
        yield ['/back/post'];
        yield ['/back/post/12'];
        //yield ['/back/post/new'];
        yield ['/back/category'];
        //yield ['/back/category/1'];
        yield ['/back/category/new'];
        //yield ['/back/category/1/edit'];
        yield ['/back/candidacy'];
        yield ['/back/candidacy/13'];
    }
}
