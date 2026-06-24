import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SearchExperience } from "@/components/SearchExperience";

describe("<SearchExperience />", () => {
    beforeEach(() => {
        vi.stubGlobal(
            "fetch",
            vi.fn().mockResolvedValue({
                json: async () => ({
                    results: [
                        {
                            slug: "designation-velocity-2026",
                            title: "Designation Velocity Hits a Five-Year High",
                            dek: "New sanctions actions are landing faster than compliance teams can triage them.",
                        },
                    ],
                }),
            })
        );
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it("fetches and renders results after typing", async () => {
        const user = userEvent.setup();
        render(<SearchExperience />);

        await user.type(screen.getByLabelText("Search articles"), "designation");

        await waitFor(() => {
            expect(
                screen.getByRole("link", { name: /Designation Velocity/ })
            ).toBeInTheDocument();
        });

        expect(fetch).toHaveBeenCalledWith(expect.stringContaining("/api/search?q=designation"));
    });
});