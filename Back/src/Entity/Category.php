<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 * @UniqueEntity("name")
 */
class Category
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"api_categories_get_collection_only", "api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank
     * @Groups({"api_categories_get_collection_only", "api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=400, nullable=true)
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     */
    private $slug;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotBlank
     */
    private $createdAt;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="category")
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     */
    private $users;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addCategory($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeCategory($this);
        }

        return $this;
    }
}
