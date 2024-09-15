import { getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'
import XStack from './XStack'
import TypographyH3 from './ui/TypographyH3'

const sortByDate = (a, b) => {
  if (
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
  ) {
    return -1
  }
  return 1
}

const BlogPosts: React.FC = () => {
  let posts = getBlogPosts()

  return (
    <XStack className="items-start">
      {posts
        .sort(sortByDate)
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
          >
            <div className='relative -left-4 hover:bg-card-foreground items-start px-4 py-3 rounded-lg w-full-plus'>
              <TypographyH3 className="article__title">{post.metadata.title}</TypographyH3>
              <p className='article__text'>{post.metadata.summary}</p>
            </div>
          </Link>
        ))}
    </XStack>
  )
}

export default BlogPosts
