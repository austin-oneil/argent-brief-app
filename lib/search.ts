import type { Article } from "./cms/types";

// Weights for search: title match counts more than a match buried in tags, dek, etc.
const WEIGHTS = {
    title: 8,
    tags: 5,
    dek: 4,
    category: 3,
    author: 3,
};

function scoreField(value: string, query: string, weight: number): number {
    const normalized = value.toLowerCase();
    const q = query.toLowerCase();
    if (!normalized.includes(q)) return 0;
    return normalized.startsWith(q) ? weight * 2 : weight;
}

export function searchArticles(
    articles: Article[],
    query: string,
    limit = 10
): Article[] {
    const trimmed = query.trim();
    if (!trimmed) return [];

    return articles
        .map((article) => ({
            article,
            score:
                scoreField(article.title, trimmed, WEIGHTS.title) +
                scoreField(article.tags.join(" "), trimmed, WEIGHTS.tags) +
                scoreField(article.dek, trimmed, WEIGHTS.dek) +
                scoreField(article.category.name, trimmed, WEIGHTS.category) +
                scoreField(article.author.name, trimmed, WEIGHTS.author),
        }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((entry) => entry.article);
}