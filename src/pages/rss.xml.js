import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Astro Learner | Blog 45',
    description: 'My journey learning Astro 23',
    site: 'https://tailwindui-6re.pages.dev/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}