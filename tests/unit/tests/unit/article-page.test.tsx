import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ArticlePage, { generateStaticParams } from "@/app/brief/[slug]/page";
import { articles } from "@/lib/cms/content";

describe("generateStaticParams", () => {
    it("returns one entry per article", async () => {
        const params = await generateStaticParams();
        expect(params).toHaveLength(articles.length);
        expect(params).toContainEqual({ slug: articles[0].slug });
    });
});

describe("ArticlePage", () => {
    it("renders the article title and dek", async () => {
        const ui = await ArticlePage({
            params: Promise.resolve({ slug: articles[0].slug }),
        });
        render(ui);
        expect(
            screen.getByRole("heading", { name : articles[0].title })
        ).toBeInTheDocument();
        expect(screen.getByText(articles[0].dek)).toBeInTheDocument();
    });
});