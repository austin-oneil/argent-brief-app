// Content model. Shaped the way a headless CMS like Contentful or Sanity would return it: a Category/Author reference embedded on each article, a dek (the short
// teaser line under a headline), and a featured flag so the homepage can pick a hero without hardcoding a slug.

export type Category = {
    slug: string;
    name: string;
    description: string;
}

export type Author = {
    slug: string;
    name: string;
    title: string;
}

export type Article = {
    slug: string;
    title: string;
    dek: string;
    body: string;
    category: Category;
    author: Author;
    publishedAt: string;
    tags: string[];
    featured: boolean;
}
