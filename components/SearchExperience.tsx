"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/cms/types";

export function SearchExperience() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function handleChange(value: string) {
        setQuery(value);

        if (debounceRef.current) clearTimeout(debounceRef.current);

        if (!value.trim()) {
            setResults([]);
            return;
        }

        setLoading(true);
        debounceRef.current = setTimeout(async () => {
            const response = await fetch(`/api/search?q=${encodeURIComponent(value)}`);
            const data = await response.json();
            setResults(data.results);
            setLoading(false);
        }, 250);
    }

    return (
        <div>
            <input
                type="search"
                value={query}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search The Argent Brief"
                aria-label="Search articles"
                className="w-full rounded-sm border border-line bg-white px-4 py-2 text-ink"
            />
            {loading && <p className="mt-4 text-sm text-ink-mute">Searching…</p>}
            <ul className="mt-6 space-y-4">
                {results.map((article) => (
                    <li key={article.slug}>
                        <Link
                            href={`/brief/${article.slug}`}
                            className="font-serif text-xl text-ink hover:underline"
                        >
                            {article.title}
                        </Link>
                        <p className="text-sm text-ink-mute">{article.dek}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}