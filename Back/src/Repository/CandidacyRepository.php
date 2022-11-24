<?php

namespace App\Repository;

use App\Entity\Post;
use App\Entity\Candidacy;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Candidacy>
 *
 * @method Candidacy|null find($id, $lockMode = null, $lockVersion = null)
 * @method Candidacy|null findOneBy(array $criteria, array $orderBy = null)
 * @method Candidacy[]    findAll()
 * @method Candidacy[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CandidacyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Candidacy::class);
    }

    public function add(Candidacy $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Candidacy $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @return Candidacy[] Returns an array of Candidacy objects
     */
    public function findByReport($value): array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.report = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            //          ->setMaxResults(10)
            ->getQuery()
            ->getResult();
    }

    public function findCandidacyByCreatedAt()
    {
        $qb = $this->createQueryBuilder('c');
        $qb->orderBy('c.createdAt', 'DESC');

        return $qb->getQuery()
            ->getResult();
    }

    //    /**
    //     * @return Candidacy[] Returns an array of Candidacy objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Candidacy
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
