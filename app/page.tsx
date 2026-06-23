import {getAllArticles, getFeaturedArticles} from "@/lib/cms/client";
import {ArticleCard} from "@/components/ArticleCard";

export default async function HomePage() {

    const [featured, allArticles] = await Promise.all([
        getFeaturedArticles(1),
        getAllArticles(),
    ]);
    const hero = featured[0];
    const rest = allArticles.filter((a) => a.slug !== hero?.slug);

  return (
    <main className="mx-auto max-w-3xl px-4 ppy-12">
      <h1 className="font-serif text-3xl font-bold tracking-tight text-ink">
        The Argent Brief
      </h1>
        {hero && (
            <div className="mt-8">
                <ArticleCard article={hero} />
            </div>
        )}
        <div className="mt-4">
            {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
            ))}
        </div>
    </main>
  );
}
