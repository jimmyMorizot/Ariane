<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\CandidacyRepository;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CandidacyRepository::class)
 */
class Candidacy
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_association_get_item"})
     * @Groups({"api_volunteer_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     * @Groups({"api_post_get_item"})
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_association_get_item", "api_post_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     * @Groups({"api_volunteer_get_item"})
     */
    private $content;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $report;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotBlank
     * @Groups({"api_association_get_item"})
     * @Groups({"api_volunteer_get_item"})
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=Post::class, inversedBy="candidacies")
     * @ORM\JoinColumn(nullable=false)
     */
    private $post;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="candidacies")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"api_volunteers_get_collection"})
     * @Groups({"api_candidacy_get_item", "api_candidacies_get_collection"})
     * @Groups({"api_post_get_item"})
     */
    private $user;

    public function __construct()
    {
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getPost(): ?Post
    {
        return $this->post;
    }

    public function setPost(?Post $post): self
    {
        $this->post = $post;

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
}
