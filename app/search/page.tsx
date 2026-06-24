import type { Metadata } from "next";
import { SearchExperience } from "@/components/SearchExperience";

export const metadata: Metadata = {
    title: "Search",
    description:
        "Search The Argent Brief's reporting on sanctions, export controls, and financial crime.",
    robots: { index: false },
};

export default function SearchPage() {
    return (
        <main className="mx-auto max-w-2xl px-4 py-12">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">
                Search the Brief
            </h1>
            <div className="mt-8">
                <SearchExperience />
            </div>
        </main>
    );
}