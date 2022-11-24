<?php

namespace App\Entity;

use App\Repository\PostRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"api_posts_get_collection", "api_post_get_item"})
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @ORM\OrderBy({"createdAt" = "ASC"})
     * @Assert\NotBlank
     * @Groups({"api_posts_get_collection","api_post_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @Groups({"api_post_new_item"})
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank
     * @Groups({"api_posts_get_collection", "api_post_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     */
    private $description;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"api_posts_get_collection", "api_post_get_item"})
     */
    private $nbAnswer;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $report;

    /**
     * @ORM\Column(type="string", length=400, nullable=true)
     * @Groups({"api_posts_get_collection","api_post_get_item"})
     */
    private $slug;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotBlank
     * @Groups({"api_posts_get_collection", "api_post_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="posts")
     * @Groups({"api_posts_get_collection", "api_post_get_item"})
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Supply::class, inversedBy="posts")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     */
    private $supply;

    /**
     * @ORM\OneToMany(targetEntity=Candidacy::class, mappedBy="post", orphanRemoval=true)
     * @Groups({"api_association_get_item", "api_post_get_item"})
     */
    private $candidacies;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"api_posts_get_collection", "api_post_get_item", "api_association_get_item" })
     */
    private $picture;

    public function __construct()
    {
        $this->candidacies = new ArrayCollection();
        $this->nbAnswer = 0;
        $this->report = false;
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
    }

    public function __toString()
    {
        return (string) $this->getSupply();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getNbAnswer(): ?int
    {
        return $this->nbAnswer;
    }

    public function setNbAnswer(?int $nbAnswer): self
    {
        $this->nbAnswer = $nbAnswer;

        return $this;
    }

    public function isReport(): ?bool
    {
        return $this->report;
    }

    public function setReport(?bool $report): self
    {
        $this->report = $report;

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

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getSupply(): ?Supply
    {
        return $this->supply;
    }

    public function setSupply(?Supply $supply): self
    {
        $this->supply = $supply;

        return $this;
    }

    /**
     * @return Collection<int, Candidacy>
     */
    public function getCandidacies(): Collection
    {
        return $this->candidacies;
    }

    public function addCandidacy(Candidacy $candidacy): self
    {
        if (!$this->candidacies->contains($candidacy)) {
            $this->candidacies[] = $candidacy;
            $candidacy->setPost($this);
        }

        return $this;
    }

    public function removeCandidacy(Candidacy $candidacy): self
    {
        if ($this->candidacies->removeElement($candidacy)) {
            // set the owning side to null (unless already changed)
            if ($candidacy->getPost() === $this) {
                $candidacy->setPost(null);
            }
        }

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }
}
