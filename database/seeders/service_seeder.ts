import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Service from "#models/service"

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Service.createMany([
      {
        name: 'Logo Design',
        description: 'Professional and memorable logo design to establish your brand identity.',
        price: 35, // USD
        imageUrl: 'https://placehold.co/400x300?text=Logo+Design',
        category: 'Branding'
      },
      {
        name: 'Business Card Design',
        description: 'Creative business card designs that leave a strong first impression.',
        price: 20,
        imageUrl: 'https://placehold.co/400x300?text=Business+Card',
        category: 'Branding'
      },
      {
        name: 'UI/UX Web Design',
        description: 'Modern, responsive web interface designs focused on great user experience.',
        price: 100,
        imageUrl: 'https://placehold.co/400x300?text=Web+UI+Design',
        category: 'Web Design'
      },
      {
        name: 'Mobile App UI Design',
        description: 'Visually appealing and user-friendly mobile app interface designs.',
        price: 80,
        imageUrl: 'https://placehold.co/400x300?text=App+UI+Design',
        category: 'App Design'
      },
      {
        name: 'Social Media Template',
        description: 'Ready-to-use social media templates to boost your online presence.',
        price: 25,
        imageUrl: 'https://placehold.co/400x300?text=Social+Template',
        category: 'Marketing'
      },
      {
        name: 'Flyer & Poster Design',
        description: 'Creative flyers, posters, and banners for marketing campaigns.',
        price: 30,
        imageUrl: 'https://placehold.co/400x300?text=Flyer+Poster',
        category: 'Marketing'
      },
      {
        name: 'Packaging Design',
        description: 'Professional product packaging design to attract customers.',
        price: 50,
        imageUrl: 'https://placehold.co/400x300?text=Packaging+Design',
        category: 'Product Design'
      },
      {
        name: 'Brand Identity Package',
        description: 'Complete branding package: logo, business card, letterhead, and brand guidelines.',
        price: 150,
        imageUrl: 'https://placehold.co/400x300?text=Brand+Identity',
        category: 'Branding'
      },
      {
        name: 'Infographic Design',
        description: 'Engaging infographic designs for presentations or digital content.',
        price: 35,
        imageUrl: 'https://placehold.co/400x300?text=Infographic',
        category: 'Marketing'
      },
      {
        name: 'Website Landing Page',
        description: 'Effective landing page design to promote your product or service.',
        price: 70,
        imageUrl: 'https://placehold.co/400x300?text=Landing+Page',
        category: 'Web Design'
      },
      {
        name: 'E-commerce Product Page',
        description: 'Visually attractive product page design optimized for conversions.',
        price: 60,
        imageUrl: 'https://placehold.co/400x300?text=Product+Page',
        category: 'Web Design'
      },
      {
        name: 'Presentation Design',
        description: 'Professional presentation designs with clear layouts and appealing visuals.',
        price: 30,
        imageUrl: 'https://placehold.co/400x300?text=Presentation',
        category: 'Marketing'
      }
    ])  
  }
}