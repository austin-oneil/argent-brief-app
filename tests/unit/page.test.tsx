import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
    it("renders the site hero and the rest of the articles", async () => {
        const ui = await HomePage();
        render(ui);
        expect(
            screen.getByRole("heading", { name: "The Argent Brief" })
        ).toBeInTheDocument();
        expect(screen.getAllByRole("heading", { level: 2}).length).toBeGreaterThan(0);
    });
});