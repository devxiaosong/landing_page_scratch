import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostMeta {
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  author: string;
  authorBio: string;
  avatar: string;
  date: string;
  coverImage?: string;
}

export interface PostHeading {
  id: string;
  text: string;
  level: number;
}

export interface Post extends PostMeta {
  content: string;
  headings: PostHeading[];
}

export interface CategoryMeta {
  slug: string;
  label: string;
  count: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractHeadings(content: string): PostHeading[] {
  const lines = content.split('\n');
  const headings: PostHeading[] = [];

  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      headings.push({ id: slugify(text), text, level });
    }
  }

  return headings;
}

export function getAllCategories(): CategoryMeta[] {
  if (!fs.existsSync(contentDirectory)) return [];

  const entries = fs.readdirSync(contentDirectory, { withFileTypes: true });
  const categories = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  const result: CategoryMeta[] = [];

  for (const slug of categories) {
    const categoryPath = path.join(contentDirectory, slug);
    const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith('.md'));

    if (files.length === 0) continue;

    // Read label from first file's frontmatter
    let label = slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    const firstFilePath = path.join(categoryPath, files[0]);
    const { data } = matter(fs.readFileSync(firstFilePath, 'utf-8'));
    if (data.categoryLabel) label = data.categoryLabel;

    result.push({ slug, label, count: files.length });
  }

  return result;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(contentDirectory)) return [];

  const entries = fs.readdirSync(contentDirectory, { withFileTypes: true });
  const categories = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  const posts: PostMeta[] = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDirectory, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(categoryPath, file);
      const { data } = matter(fs.readFileSync(filePath, 'utf-8'));

      posts.push({
        slug,
        category,
        categoryLabel: data.categoryLabel || slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        author: data.author || '',
        authorBio: data.authorBio || '',
        avatar: data.avatar || '',
        date: data.date ? String(data.date) : '',
        coverImage: data.coverImage,
      });
    }
  }

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPost(category: string, slug: string): Post | null {
  const filePath = path.join(contentDirectory, category, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    category,
    categoryLabel: data.categoryLabel || category,
    title: data.title || '',
    excerpt: data.excerpt || '',
    author: data.author || '',
    authorBio: data.authorBio || '',
    avatar: data.avatar || '',
    date: data.date ? String(data.date) : '',
    coverImage: data.coverImage,
    content,
    headings: extractHeadings(content),
  };
}

export function generateBlogStaticParams(): { category: string; slug: string }[] {
  if (!fs.existsSync(contentDirectory)) return [];

  const entries = fs.readdirSync(contentDirectory, { withFileTypes: true });
  const categories = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  const params: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDirectory, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((f) => f.endsWith('.md'));

    for (const file of files) {
      params.push({ category, slug: file.replace(/\.md$/, '') });
    }
  }

  return params;
}
