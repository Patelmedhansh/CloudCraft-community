import type { LearningPath } from '../types/supabase';

export const learningPaths: LearningPath[] = [
  {
    id: '1',
    title: 'DevOps Fundamentals',
    description: 'Master the essential concepts and tools of DevOps, from CI/CD to infrastructure as code.',
    category: 'devops',
    resources: [
      {
        title: 'What is DevOps?',
        type: 'article',
        url: 'https://www.atlassian.com/devops/what-is-devops',
        description: 'Comprehensive introduction to DevOps principles and practices'
      },
      {
        title: 'Getting Started with Docker',
        type: 'video',
        url: 'https://www.youtube.com/@medhansh39',
        description: 'Complete Docker Tutorial for Beginners'
      },
      {
        title: 'Infrastructure as Code with Terraform',
        type: 'documentation',
        url: 'https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-build',
        description: 'Official HashiCorp Terraform getting started guide'
      }
    ]
  },
  {
    id: '2',
    title: 'Open Source Contribution Guide',
    description: 'Learn how to contribute to open source projects and become part of the community.',
    category: 'open-source',
    resources: [
      {
        title: 'First Contributions Guide',
        type: 'documentation',
        url: 'https://github.com/firstcontributions/first-contributions/blob/main/README.md',
        description: 'Step-by-step guide for first-time contributors'
      },
      {
        title: 'Open Source Etiquette',
        type: 'article',
        url: 'https://opensource.guide/how-to-contribute/',
        description: 'Best practices for contributing to open source'
      },
      {
        title: 'Finding Your First Open Source Project',
        type: 'video',
        url: 'https://www.youtube.com/@medhansh39',
        description: 'Guide to finding beginner-friendly projects'
      }
    ]
  },
  {
    id: '3',
    title: 'Git & GitHub Mastery',
    description: 'From basic version control to advanced Git workflows and GitHub collaboration.',
    category: 'devops',
    resources: [
      {
        title: 'Git & GitHub Crash Course',
        type: 'video',
        url: 'https://www.youtube.com/@medhansh39',
        description: 'Complete introduction to Git and GitHub'
      },
      {
        title: 'Advanced Git Workflows',
        type: 'article',
        url: 'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow',
        description: 'Master different Git workflows and branching strategies'
      },
      {
        title: 'GitHub Actions for CI/CD',
        type: 'documentation',
        url: 'https://docs.github.com/en/actions/quickstart',
        description: 'Official GitHub Actions quickstart guide'
      }
    ]
  },
  {
    id: '4',
    title: 'Platform Engineering Essentials',
    description: 'Learn to build and maintain scalable developer platforms and tools.',
    category: 'platform-engineering',
    resources: [
      {
        title: 'Introduction to Platform Engineering',
        type: 'article',
        url: 'https://platformengineering.org/blog/what-is-platform-engineering',
        description: 'Understanding platform engineering fundamentals'
      },
      {
        title: 'Kubernetes for Platform Engineers',
        type: 'documentation',
        url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
        description: 'Official Kubernetes basics tutorial'
      },
      {
        title: 'Developer Experience (DX) Best Practices',
        type: 'article',
        url: 'https://dx.tips/',
        description: 'Creating better developer platforms'
      }
    ]
  }
];