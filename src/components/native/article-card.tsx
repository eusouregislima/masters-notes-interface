import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

type ArticleCardProps = {
  title: string;
  tags: string[];
  subtitle: string;
  authorName: string;
  createdAt: Date;
};

export function ArticleCard({
  authorName,
  subtitle,
  title,
  tags,
  createdAt,
}: ArticleCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-5">
        <CardDescription className="space-x-2">
          {tags.map((tag, index) => (
            <Badge key={`${tag}-${index}`} variant="secondary">
              {tag}
            </Badge>
          ))}
        </CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{subtitle}</CardContent>
      <CardFooter>
        {authorName},{' '}
        {new Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'medium',
          timeZone: 'America/Sao_Paulo',
        }).format(createdAt)}
      </CardFooter>
    </Card>
  );
}
