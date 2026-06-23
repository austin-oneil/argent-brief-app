import { articles, categoryList } from "./content";
import type {Article, Category } from "./types";

// The access layer. Set up for headless CMS like Contenful, which returns a Promise.


// Article functions

export async function getAllArticles(): Promise<Article[]> {
    return [...articles].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getFeaturedArticles(limit = 1): Promise<Article[]> {
    const all = await getAllArticles();
    return all.filter((a) => a.featured).slice(0, limit);
}

export async function getAllCategories(): Promise<Category[]> {
    return categoryList;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
    const all = await getAllArticles();
    return all.find((article) => article.slug === slug);
}

// Category functions

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const categories = await getAllCategories();
    return categories.find((c) => c.slug === slug);
}

export async function getArticlesByCategory(slug: string): Promise<Article[]> {
    const all = await getAllArticles();
    return all.filter((a) => a.category.slug === slug);
}