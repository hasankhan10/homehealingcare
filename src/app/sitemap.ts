import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.homehealingcare.com';

  const routes = [
    '/',
    '/about',
    '/services',
    '/symptom-checker',
    '/booking',
    '/contact',
    '/privacy-policy',
    '/terms-of-service'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
