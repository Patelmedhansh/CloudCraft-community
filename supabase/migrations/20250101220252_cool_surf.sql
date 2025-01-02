/*
  # Add Learning Paths Data

  1. New Data
    - Adds initial learning paths for:
      - DevOps
      - Open Source
      - Git & GitHub
      - Platform Engineering
    
  2. Content
    - Each path includes curated resources with titles, types, and URLs
    - Resources are organized by difficulty level
*/

INSERT INTO learning_paths (title, description, category, resources) VALUES
(
  'DevOps Fundamentals',
  'Master the essential concepts and tools of DevOps, from CI/CD to infrastructure as code.',
  'devops',
  '[
    {
      "title": "What is DevOps? A Comprehensive Introduction",
      "type": "article",
      "url": "https://aws.amazon.com/devops/what-is-devops/",
      "description": "Understand the core principles of DevOps"
    },
    {
      "title": "Getting Started with Docker",
      "type": "video",
      "url": "https://www.youtube.com/@medhansh39",
      "description": "Learn containerization basics with Docker"
    },
    {
      "title": "Infrastructure as Code with Terraform",
      "type": "documentation",
      "url": "https://learn.hashicorp.com/terraform",
      "description": "Master infrastructure automation"
    }
  ]'::jsonb
),
(
  'Open Source Contribution Guide',
  'Learn how to contribute to open source projects and become part of the community.',
  'open-source',
  '[
    {
      "title": "First Contributions Guide",
      "type": "documentation",
      "url": "https://github.com/firstcontributions/first-contributions",
      "description": "Step-by-step guide for first-time contributors"
    },
    {
      "title": "Open Source Etiquette",
      "type": "article",
      "url": "https://opensource.guide/how-to-contribute/",
      "description": "Best practices for contributing to open source"
    },
    {
      "title": "Finding Your First Open Source Project",
      "type": "video",
      "url": "https://www.youtube.com/@medhansh39",
      "description": "Guide to finding beginner-friendly projects"
    }
  ]'::jsonb
),
(
  'Git & GitHub Mastery',
  'From basic version control to advanced Git workflows and GitHub collaboration.',
  'devops',
  '[
    {
      "title": "Git Basics",
      "type": "documentation",
      "url": "https://git-scm.com/book/en/v2/Getting-Started-Git-Basics",
      "description": "Core concepts of version control with Git"
    },
    {
      "title": "Advanced Git Workflows",
      "type": "video",
      "url": "https://www.youtube.com/@medhansh39",
      "description": "Master branching strategies and workflows"
    },
    {
      "title": "GitHub Actions for CI/CD",
      "type": "article",
      "url": "https://docs.github.com/en/actions",
      "description": "Automate your workflows with GitHub Actions"
    }
  ]'::jsonb
),
(
  'Platform Engineering Essentials',
  'Learn to build and maintain scalable developer platforms and tools.',
  'platform-engineering',
  '[
    {
      "title": "Introduction to Platform Engineering",
      "type": "article",
      "url": "https://platformengineering.org/blog/what-is-platform-engineering",
      "description": "Understanding platform engineering fundamentals"
    },
    {
      "title": "Kubernetes for Platform Engineers",
      "type": "video",
      "url": "https://www.youtube.com/@medhansh39",
      "description": "Master container orchestration"
    },
    {
      "title": "Developer Experience (DX) Best Practices",
      "type": "documentation",
      "url": "https://dx.tips/",
      "description": "Creating better developer platforms"
    }
  ]'::jsonb
);