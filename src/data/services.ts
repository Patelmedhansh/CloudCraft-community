import { Cloud, Code, Users, Terminal, Bot, Blocks, Shield } from 'lucide-react';

export const allServices = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'End-to-end cloud infrastructure design and implementation with best practices and security in mind.',
    features: [
      'Cloud architecture design',
      'Infrastructure automation',
      'Cost optimization',
      'Multi-cloud strategies',
      'Security best practices'
    ]
  },
  {
    icon: Bot,
    title: 'AI Agents Development',
    description: 'Custom AI agents and chatbots tailored to your business needs and integrated with your existing systems.',
    features: [
      'Custom AI assistant design',
      'Process automation',
      'Knowledge base integration',
      'Workflow optimization',
      'Natural language processing'
    ]
  },
  {
    icon: Code,
    title: 'DevOps Consulting',
    description: 'Streamline your development and operations workflow with modern DevOps practices and tools.',
    features: [
      'CI/CD pipeline setup',
      'Container orchestration',
      'Infrastructure as Code',
      'Monitoring and logging',
      'Team collaboration improvement'
    ]
  },
  {
    icon: Terminal,
    title: 'Platform Engineering',
    description: 'Build and maintain scalable developer platforms that enhance productivity and standardization.',
    features: [
      'Internal developer platforms',
      'Developer experience optimization',
      'Tool chain automation',
      'Self-service capabilities',
      'Platform maintenance'
    ]
  },
  {
    icon: Blocks,
    title: 'AI Integration Services',
    description: 'Seamlessly integrate AI capabilities into your existing systems and applications.',
    features: [
      'LLM API integration',
      'Custom model training',
      'AI pipeline development',
      'Performance optimization',
      'Data preprocessing'
    ]
  },
  {
    icon: Shield,
    title: 'Training & Workshops',
    description: 'Comprehensive training programs and workshops to upskill your team in cloud and DevOps practices.',
    features: [
      'Custom training programs',
      'Hands-on workshops',
      'Certification preparation',
      'Team upskilling',
      'Ongoing support'
    ]
  }
] as const;