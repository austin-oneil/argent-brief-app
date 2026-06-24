import { describe, expect, it } from "vitest";
import { searchArticles } from "@/lib/search";
import { articles } from "@/lib/cms/content";

describe("searchArticles", () => {
    it("returns an empty array for a blank query", () => {
        expect(searchArticles(articles, "   ")).toEqual([]);
    });

    it("matches by title", () => {
        const results = searchArticles(articles, "designation");
        expect(results.some((a) => a.slug === "designation-velocity-2026")).toBe(true);
    });

    it("matches by author name", () => {
        const results = searchArticles(articles, "chen");
        expect(results.length).toBeGreaterThan(0);
        expect(results.every((a) => a.author.name.toLowerCase().includes("chen"))).toBe(
            true
        );
    });

    it("respects the limit", () => {
        const results = searchArticles(articles, "the", 1);
        expect(results.length).toBeLessThanOrEqual(1);
    });
});