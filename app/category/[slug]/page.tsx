import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import {
    getAllCategories,
    getArticlesByCategory,
    getCategoryBySlug,
} from "@/lib/cms/client";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const categories = await getAllCategories();
    return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);
    if (!category) return {};
    return { title: category.name, description: category.description };
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);
    if (!category) {
        notFound();
    }
    const articles = await getArticlesByCategory(slug);

    return (
        <main className="mx-auto max-w-3xl px-4 py-12">
            <p className="text-xs font-semibold uppercase tracking-wide text-crimson">
                Category
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-ink">
                {category.name}
            </h1>
            <p className="mt-2 text-ink-mute">{category.description}</p>
            <div className="mt-8">
                {articles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                ))}
            </div>
        </main>
    );
}