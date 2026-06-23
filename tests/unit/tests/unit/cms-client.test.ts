import { describe, expect, it } from "vitest";
import { getAllArticles, getFeaturedArticles, getAllCategories } from "@/lib/cms/client";

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
    })
})
