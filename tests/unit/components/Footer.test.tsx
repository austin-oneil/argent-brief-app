import { render, screen } from "@testing-library/react";
import {describe, expect, it } from "vitest";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
    it("renders a copyright notice", () => {
        render(<Footer />)
        expect(screen.getByText(/The Argent Brief/)).toBeInTheDocument()
    });
});