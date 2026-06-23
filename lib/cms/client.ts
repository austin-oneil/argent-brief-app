import { articles, categoryList } from "./content";
import type {Article, Category } from "./types";

// The access layer. Set up for headless CMS like Contenful, which returns a Promise.

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
