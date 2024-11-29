import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/$slug')({
  component: Article,
});

function Article() {
  const { slug } = Route.useParams();

  return <div>{slug}</div>;
}
