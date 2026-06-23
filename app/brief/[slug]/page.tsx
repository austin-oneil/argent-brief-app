import {getAllArticles, getArticleBySlug} from "@/lib/cms/client";
import {notFound} from "next/navigation";
import {Metadata} from "next";


type Props = {
    params: Promise<{ slug: string }>
}

// finds the slug values that exist at build time so Next can pre-render one HTML file per article. Demonstrates SSG for dynamic routes.
export async function generateStaticParams() {
    const articles = await getAllArticles();
    return articles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata>  {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    if (!article) return {};
    return { title: article.title, description: article.dek };
}


export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    if (!article) {
        notFound();
    }

    return (
        <article className="mx-auto max-w-2xl px-4 py-12">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink">
                {article.category.name}
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-right text-ink">
                {article.title}
            </h1>
            <p className="mt-4 text-lg text-ink-mute">{article.dek}</p>
            <p className="mt-4 text-sm text-ink-mute">
                {article.author.name} {" "}
                {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <div className="mt-8 text-ink">
                <p>
                    {article.body}
                </p>
            </div>
        </article>
    )

}