import { describe, expect, it } from "vitest";
import {
    getAllArticles,
    getFeaturedArticles,
    getAllCategories,
    getArticleBySlug,
    getArticlesByCategory, getCategoryBySlug
} from "@/lib/cms/client";

describe("cms client", () => {
    it("returns articles sorted by newest first", async () => {
        const articles = await getAllArticles();
        const dates = articles.map((a) => new Date(a.publishedAt).getTime());
        expect(dates).toEqual([...dates].sort((a, b) => b - a));
    });

    it("respects the limit set on featured articles", async () => {
        const featured = await getFeaturedArticles(1);
        expect(featured).toHaveLength(1);
    });

    it("returns all categories", async () => {
        const categories = await getAllCategories();
        expect(categories.length).toBeGreaterThan(0);
    });

    it("finds an article by slug", async () => {
        const article = await getArticleBySlug("designation-velocity-2026");
        expect(article?.title).toBe("Designation Velocity Hits a Five-Year High");
    });

    it("returns undefined for an unknown slug", async () => {
        const article = await getArticleBySlug("does-not-exist");
        expect(article).toBeUndefined();
    });

    it("finds a category by slug", async () => {
        const category = await getCategoryBySlug("sanctions");
        expect(category?.name).toBe("Sanctions");
    });

    it("filters articles by category", async () => {
        const articles = await getArticlesByCategory("sanctions");
        expect(articles.length).toBeGreaterThan(0);
        expect(articles.every((a) => a.category.slug === "sanctions")).toBe(true);
    });
});
