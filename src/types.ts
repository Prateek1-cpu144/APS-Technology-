export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  details?: string[];
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}
