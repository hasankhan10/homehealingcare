import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">Our Health Blog</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Insights, tips, and stories on health and wellness from our experts.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="object-cover w-full h-48"
                    data-ai-hint={post.imageHint}
                  />
                </Link>
                <CardHeader>
                  <CardTitle>
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center pt-2">
                    <Avatar className="h-8 w-8">
                       <AvatarImage src={post.authorImage} alt={post.author} />
                       <AvatarFallback>{post.author.slice(0,1)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2 text-sm text-muted-foreground">
                      <span>{post.author}</span> &middot; <span>{post.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                   {post.tags.map(tag => (
                     <Badge key={tag} variant="secondary">{tag}</Badge>
                   ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
