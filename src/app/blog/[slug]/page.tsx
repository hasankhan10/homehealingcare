import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug } from '@/lib/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.authorImage} alt={post.author} />
                <AvatarFallback>{post.author.slice(0, 1)}</AvatarFallback>
              </Avatar>
              <span>{post.author}</span>
            </div>
            <span>&middot;</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </header>
        
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-lg mb-8 w-full object-cover"
          data-ai-hint={post.imageHint}
          priority
        />
        
        <div className="prose prose-lg max-w-none dark:prose-invert"
             dangerouslySetInnerHTML={{ __html: post.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') }} />
      </div>
    </article>
  );
}
