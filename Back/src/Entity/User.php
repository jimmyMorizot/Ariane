<?php

namespace App\Entity;

use App\Entity\Post;
use App\Entity\Category;
use App\Entity\Candidacy;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity("name")
 * @UniqueEntity("email")
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"api_volunteers_get_collection","api_volunteer_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\NotBlank
     * @Assert\Email
     * @Groups({"api_volunteers_get_collection","api_volunteer_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     * @Groups({"api_post_get_item"})
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * 
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\Regex(pattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/", message = "Le mot de passe doit contenir au moins: huit caractères dont une lettre, un chiffre et un caractère spécial(@$!%*?&)")
     *               
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Groups({"api_volunteers_get_collection","api_volunteer_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $profil;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, unique=true)
     * @Groups({"api_volunteers_get_collection","api_volunteer_get_item"})
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_supplies_get_collection", "api_supply_get_item"})
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"api_volunteers_get_collection","api_volunteer_get_item"})
     * @Groups({"api_post_get_item"})
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"api_volunteers_get_collection","api_volunteer_get_item"})
     * @Groups({"api_post_get_item"})
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $lastname;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     * 
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $postCode;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_volunteers_get_collection","api_volunteer_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_candidacy_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     * @Groups({"api_post_get_item"})
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $report;

    /**
     * @ORM\Column(type="string", length=400, nullable=true)
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_categories_get_collection", "api_category_get_item"})
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $citySlug;

    /**
     * @ORM\Column(type="string", length=400, nullable=true)
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     */
    private $picture;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotBlank
     */
    private $createdAt;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class, inversedBy="users")
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     * @Groups({"api_posts_get_collection", "api_post_get_item", })
     * @Groups({"api_user_candidacy_get_collection"})
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity=Post::class, mappedBy="user", orphanRemoval=true)
     * @Groups({"api_associations_get_collection", "api_association_get_item"})
     */
    private $posts;

    /**
     * @ORM\OneToMany(targetEntity=Candidacy::class, mappedBy="user", orphanRemoval=true)
     * @Groups({"api_user_candidacy_get_collection"})
     * @Groups({"api_volunteer_get_item"})
     */
    private $candidacies;

    public function __toString()
    {
        return (string) $this->getName();
    }

    public function __construct()
    {
        $this->category = new ArrayCollection();
        $this->posts = new ArrayCollection();
        $this->candidacies = new ArrayCollection();
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
        $this->report = false;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getProfil(): ?string
    {
        return $this->profil;
    }

    public function setProfil(string $profil): self
    {
        $this->profil = $profil;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getPostCode(): ?string
    {
        return $this->postCode;
    }

    public function setPostCode(string $postCode): self
    {
        $this->postCode = $postCode;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

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

    public function getCitySlug(): ?string
    {
        return $this->citySlug;
    }

    public function setCitySlug(?string $citySlug): self
    {
        $this->citySlug = $citySlug;

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

    /**
     * @return Collection<int, Category>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->category->contains($category)) {
            $this->category[] = $category;
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        $this->category->removeElement($category);

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
            $post->setUser($this);
        }

        return $this;
    }

    public function removePost(Post $post): self
    {
        if ($this->posts->removeElement($post)) {
            // set the owning side to null (unless already changed)
            if ($post->getUser() === $this) {
                $post->setUser(null);
            }
        }

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
            $candidacy->setUser($this);
        }

        return $this;
    }

    public function removeCandidacy(Candidacy $candidacy): self
    {
        if ($this->candidacies->removeElement($candidacy)) {
            // set the owning side to null (unless already changed)
            if ($candidacy->getUser() === $this) {
                $candidacy->setUser(null);
            }
        }

        return $this;
    }
}
