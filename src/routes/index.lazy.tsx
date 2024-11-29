import { ArticleCard } from '@/components/native/article-card';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <section className="max-w-screen-md w-full mx-auto px-4 py-8 flex flex-col gap-4">
      <ArticleCard
        title="Meu primeiro Artigo"
        authorName="Regis Lima"
        subtitle="Sejam bem vindos"
        tags={['mussum', 'ipsun', 'nadis']}
        createdAt={new Date('2024-11-14T23:16:05.359Z')}
      />
      <ArticleCard
        title="Meu primeiro Artigo"
        authorName="Regis Lima"
        subtitle="Sejam bem vindos"
        tags={['mussum', 'ipsun', 'nadis']}
        createdAt={new Date('2024-11-14T23:16:05.359Z')}
      />
      <ArticleCard
        title="Meu primeiro Artigo"
        authorName="Regis Lima"
        subtitle="Sejam bem vindos"
        tags={['mussum', 'ipsun', 'nadis']}
        createdAt={new Date('2024-11-14T23:16:05.359Z')}
      />
      <ArticleCard
        title="Meu primeiro Artigo"
        authorName="Regis Lima"
        subtitle="Sejam bem vindos"
        tags={['mussum', 'ipsun', 'nadis']}
        createdAt={new Date('2024-11-14T23:16:05.359Z')}
      />
      <ArticleCard
        title="Meu primeiro Artigo"
        authorName="Regis Lima"
        subtitle="Sejam bem vindos"
        tags={['mussum', 'ipsun', 'nadis']}
        createdAt={new Date('2024-11-14T23:16:05.359Z')}
      />
    </section>
  );
}
