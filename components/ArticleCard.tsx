import Link from 'next/link';
import type { Article} from "@/lib/cms/types";

export function ArticleCard({article }: {article: Article}) {
    return (
        <article className="border-b border-line py-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-crimson">
                {article.category.name}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
                <Link href={`/brief/${article.slug}`}>{article.title}</Link>
            </h2>
            <p className="mt-2 text-ink-mute">{article.dek}</p>
            <p className="mt-3 text-sm text-ink-mute">
                {article.author.name} · {new Date(article.publishedAt).toLocaleDateString()}
            </p>
        </article>
    )
}