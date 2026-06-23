import { render, screen } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import { Header } from "@/components/Header";

describe("<Header />", () => {
    it("links the logo to the homepage", () => {
        render(<Header />);
        const link = screen.getByRole("link", { name: /the argent brief/i });
        expect(link).toHaveAttribute("href", "/");
    });

    it("has a labeled primary navigation region", () => {
        render(<Header />);
        expect(screen.getByRole("navigation", { name: "Primary"})).toBeInTheDocument();
    });
});