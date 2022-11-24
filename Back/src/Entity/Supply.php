<?php

namespace App\Entity;

use App\Repository\SupplyRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=SupplyRepository::class)
 * @UniqueEntity("name")
 */
class Supply
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     */
    private $name;

    /**
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @ORM\Column(type="string", length=400, nullable=true)
     */
    private $slug;

    /**
     * @ORM\Column(type="date")
     */
    private $createdAt;

    /**
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @ORM\OneToMany(targetEntity=Post::class, mappedBy="supply")
     */
    private $posts;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     */
    private $pictureUrl;

    public function __toString()
    {
        return (string) $this->getName();
    }

    public function __construct()
    {
        $this->posts = new ArrayCollection();
        $this->createdAt = new DateTime();
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
     * @return Collection<int, Post>
     */
    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Post $post): self
    {
        if (!$this->posts->contains($post)) {
            $this->posts[] = $post;
            $post->setSupply($this);
        }

        return $this;
    }

    public function removePost(Post $post): self
    {
        if ($this->posts->removeElement($post)) {
            // set the owning side to null (unless already changed)
            if ($post->getSupply() === $this) {
                $post->setSupply(null);
            }
        }

        return $this;
    }

    public function getPictureUrl(): ?string
    {
        return $this->pictureUrl;
    }

    public function setPictureUrl(?string $pictureUrl): self
    {
        $this->pictureUrl = $pictureUrl;

        return $this;
    }
}
