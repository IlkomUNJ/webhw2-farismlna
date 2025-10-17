import Portfolio from '#models/portfolio'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Portfolio.createMany([
      {
        title: 'Modern Tech Logo',
        description: 'A clean and modern logo for a tech startup.',
        imageUrl: 'https://placehold.co/400x300?text=Modern+Tech+Logo',
        serviceId: 1 // Logo Design
      },
      {
        title: 'Corporate Business Card',
        description: 'Professional business card for corporate identity.',
        imageUrl: 'https://placehold.co/400x300?text=Business+Card',
        serviceId: 2 // Business Card Design
      },
      {
        title: 'E-commerce Landing Page',
        description: 'Landing page designed to maximize conversion rates.',
        imageUrl: 'https://placehold.co/400x300?text=Landing+Page',
        serviceId: 10 // Website Landing Page
      },
      {
        title: 'Mobile App UI for Fitness',
        description: 'User-friendly UI design for a fitness tracking app.',
        imageUrl: 'https://placehold.co/400x300?text=Fitness+App+UI',
        serviceId: 4 // Mobile App UI Design
      },
      {
        title: 'Social Media Pack for Instagram',
        description: 'Templates for social media posts with consistent branding.',
        imageUrl: 'https://placehold.co/400x300?text=Instagram+Templates',
        serviceId: 5 // Social Media Template
      },
      {
        title: 'Product Packaging Design',
        description: 'Creative packaging design for a new beverage brand.',
        imageUrl: 'https://placehold.co/400x300?text=Packaging+Design',
        serviceId: 7 // Packaging Design
      },
      {
        title: 'Startup Brand Identity',
        description: 'Complete brand identity package for a tech startup.',
        imageUrl: 'https://placehold.co/400x300?text=Brand+Identity',
        serviceId: 8 // Brand Identity Package
      },
      {
        title: 'Infographic for Marketing',
        description: 'Infographic design to visualize complex data clearly.',
        imageUrl: 'https://placehold.co/400x300?text=Infographic',
        serviceId: 9 // Infographic Design
      },
      {
        title: 'Presentation Deck',
        description: 'Professional presentation slides for investor pitch.',
        imageUrl: 'https://placehold.co/400x300?text=Presentation',
        serviceId: 12 // Presentation Design
      },
      {
        title: 'E-commerce Product Page',
        description: 'Product page design optimized for conversions.',
        imageUrl: 'https://placehold.co/400x300?text=Product+Page',
        serviceId: 11 // E-commerce Product Page
      }
    ])
  }
}