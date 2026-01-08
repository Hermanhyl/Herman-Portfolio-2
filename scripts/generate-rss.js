import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://hermanhylland.netlify.app';
const SITE_TITLE = 'Herman Hylland Blog';
const SITE_DESCRIPTION = 'Insights on frontend development, React patterns, UI/UX design, and project case studies from Herman Hylland.';

function escapeXml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatRssDate(dateString) {
  const date = new Date(dateString);
  return date.toUTCString();
}

function generateRss() {
  const contentDir = path.join(__dirname, '..', 'content', 'blog');
  const publicDir = path.join(__dirname, '..', 'public');

  // Read all markdown files
  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

  // Parse posts from markdown files
  const posts = files.map(file => {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: markdown } = matter(content);

    return {
      id: file.replace('.md', ''),
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Herman Hylland',
      tags: data.tags || []
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  // Generate RSS XML
  const rssItems = posts.map(post => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.id}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.id}</guid>
      <pubDate>${formatRssDate(post.date)}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <author>herman@hermanhylland.com (${escapeXml(post.author)})</author>
      ${post.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
    </item>`).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${formatRssDate(new Date())}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/favicon.ico</url>
      <title>${escapeXml(SITE_TITLE)}</title>
      <link>${SITE_URL}/blog</link>
    </image>
${rssItems}
  </channel>
</rss>`;

  // Write RSS feed to public directory
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rss, 'utf-8');
  console.log(`✅ RSS feed generated with ${posts.length} posts`);
}

generateRss();
