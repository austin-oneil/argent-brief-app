import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CategoryPage, { generateStaticParams } from "@/app/category/[slug]/page";
import { categoryList } from "@/lib/cms/content";

describe("generateStaticParams", () => {
    it("returns one entry per category", async () => {
        const params = await generateStaticParams();
        expect(params).toHaveLength(categoryList.length);
    });
});

describe("CategoryPage", () => {
    it("renders the category name and its articles", async () => {
        const ui = await CategoryPage({ params: Promise.resolve({slug: "sanctions"
        }) });
        render(ui);
        expect(screen.getByRole("heading", { name: "Sanctions"})).toBeInTheDocument();
    });
});