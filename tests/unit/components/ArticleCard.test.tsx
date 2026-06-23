import { render, screen} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/cms/content";


describe("<ArticleCard />", () => {
    it("links the headline to the article", () => {
        render(<ArticleCard article={articles[0]} />);
        const link = screen.getByRole("link", {name: articles[0].title});
        expect(link).toHaveAttribute("href", `/brief/${articles[0].slug}`);
    });
});