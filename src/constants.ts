import { 
  Network, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Activity, 
  Database, 
  Cpu, 
  Globe,
  GraduationCap,
  HeartPulse,
  Building2,
  Factory,
  Store,
  Rocket
} from 'lucide-react';
import { Service, Industry, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'network',
    title: 'Network Infrastructure',
    description: 'Design and deployment of secure and scalable network environments including routers, switches, firewalls and wireless infrastructure.',
    icon: 'Network',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Network Design & Architecture',
      'Router & Switch Configuration',
      'LAN / WAN Setup',
      'Wireless Network Deployment',
      'Firewall Implementation',
      'SD-WAN Solutions'
    ]
  },
  {
    id: 'it-infra',
    title: 'IT Infrastructure Management',
    description: 'Complete IT infrastructure management including servers, virtualization, storage, backup and monitoring.',
    icon: 'Server',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Server Installation & Configuration',
      'Virtualization Solutions',
      'Data Center Setup',
      'Backup & Disaster Recovery',
      'Infrastructure Monitoring',
      'IT Support & Maintenance'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Deployment and management of cloud platforms such as AWS, Microsoft Azure, and Google Cloud Platform.',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Cloud Migration',
      'Cloud Infrastructure Setup',
      'Hybrid Cloud Solutions',
      'Cloud Security',
      'Cloud Backup & Disaster Recovery'
    ]
  },
  {
    id: 'security',
    title: 'Cybersecurity Services',
    description: 'Advanced security solutions including firewall deployment, endpoint security and network monitoring.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600',
    details: [
      'Threat Detection',
      'Vulnerability Assessment',
      'Endpoint Protection',
      'Security Audits',
      'Compliance Management'
    ]
  }
];

export const INDUSTRIES: Industry[] = [
  { id: 'edu', name: 'Education', icon: 'GraduationCap' },
  { id: 'health', name: 'Healthcare', icon: 'HeartPulse' },
  { id: 'finance', name: 'Banking & Finance', icon: 'Building2' },
  { id: 'mfg', name: 'Manufacturing', icon: 'Factory' },
  { id: 'smb', name: 'Small & Medium Businesses', icon: 'Store' },
  { id: 'startup', name: 'Startups', icon: 'Rocket' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'Global Tech Solutions',
    content: 'APS Technology transformed our legacy infrastructure into a high-performance cloud-native environment. Their expertise in SD-WAN is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'IT Director',
    company: 'HealthFirst Systems',
    content: 'The network infrastructure solutions they implemented have reduced our downtime by 40%. Their support team is proactive and highly skilled.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of SD-WAN in Enterprise Networks',
    excerpt: 'How software-defined networking is reshaping the way businesses connect their branch offices.',
    date: 'March 5, 2026',
    author: 'John Doe',
    category: 'Networking',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
    id: '2',
    title: 'Securing Your Hybrid Cloud Environment',
    excerpt: 'Best practices for maintaining a robust security posture across on-premise and public cloud workloads.',
    date: 'February 28, 2026',
    author: 'Jane Smith',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=400'
  }
];
