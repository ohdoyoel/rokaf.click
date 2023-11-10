import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rokaf.click',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}