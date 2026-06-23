import type { Article, Author, Category } from "./types";

const categories: Record<string, Category> = {
    sanctions: {
        slug: "sanctions",
        name: "Sanctions",
        description: "Designations, licensing, and enforcement actions.",
    },
    exportControls: {
        slug: "export-controls",
        name: "Export Controls",
        description: "Entity List actions and controlled-technology risk.",
    },
    financialCrime: {
        slug: "financial-crime",
        name: "Financial Crime",
        description: "Money laundering typologies and enforcement trends.",
    },
};

const authors: Record<string, Author> = {
    reyes: { slug: "m-reyes", name: "M. Reyes", title: "Senior Analyst" },
    chen: { slug: "j-chen", name: "J. Chen", title: "Investigations Editor" },
};

// Sample articles
export const articles: Article[] = [
    {
        slug: "designation-velocity-2026",
        title: "Designation Velocity Hits a Five-Year High",
        dek: "New sanctions actions are landing faster than compliance teams can triage them.",
        body: "Full article body goes here.",
        category: categories.sanctions,
        author: authors.reyes,
        publishedAt: "2026-06-10",
        tags: ["sanctions", "ofac"],
        featured: true,
    },
    {
        slug: "entity-list-subsidiaries-rule",
        title: "The Subsidiary Rule Nobody Reads Until It's Too Late",
        dek: "How a single Entity List addition can quietly capture dozens of affiliates.",
        body: "Full article body goes here.",
        category: categories.exportControls,
        author: authors.chen,
        publishedAt: "2026-06-08",
        tags: ["export-controls", "entity-list"],
        featured: false,
    },
    {
        slug: "shadow-fleet-insurance-gap",
        title: "Inside the Shadow Fleet's Insurance Gap",
        dek: "Uninsured tankers are reshaping how regulators think about maritime risk.",
        body: "Full article body goes here.",
        category: categories.sanctions,
        author: authors.reyes,
        publishedAt: "2026-06-05",
        tags: ["sanctions", "maritime"],
        featured: false,
    },
    {
        slug: "correspondent-banking-derisking",
        title: "Correspondent Banking's Quiet De-Risking Wave",
        dek: "Banks are exiting entire regions rather than refine their controls.",
        body: "Full article body goes here.",
        category: categories.financialCrime,
        author: authors.chen,
        publishedAt: "2026-06-02",
        tags: ["financial-crime", "banking"],
        featured: false,
    },
];

export const categoryList: Category[] = Object.values(categories);