import { MetadataRoute } from 'next';
import { getAllPages } from '../../lib/groq-data';
import { client } from '../../sanity/lib/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await client.fetch(getAllPages);

  const websiteName = pages?.profileSettings?.settings?.websiteName

  // Generate the sitemap for blog
  const blogUrl = pages?.blog?.map((page: any) => ({
    url: `${websiteName}/blog/${page.slug}`,
    lastModified: page?._updatedAt,
  }));

  // Generate the sitemap for legal
  const legalUrl = pages?.legal?.map((page: any) => ({
    url: `${websiteName}/legal/${page.slug}`,
    lastModified: page?._updatedAt,
  }));

  // Generate the sitemap for pages
  const pageUrl = pages?.pages?.map((page: any) => ({
    url: `${websiteName}/${page.slug}`,
    lastModified: page?._updatedAt,
  }));


  // Add additional static sitemap entries if needed
  const staticEntries = [
    {
      url: websiteName,
      lastModified: new Date(),
    },
    {
      url: `${websiteName}/blog/`,
      lastModified: new Date(),
    },
    {
      url: `${websiteName}/legal/`,
      lastModified: new Date(),
    },
  ];

  // Concatenate the dynamic and static sitemap entries
  const allEntries = [...staticEntries, ...blogUrl, ...legalUrl, ...pageUrl];

  return allEntries;
}
