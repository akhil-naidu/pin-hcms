import { BlogType } from '@payload-types'

import BlogArea from './blog-area'

const Blog = (data: BlogType) => {
  return (
    <main>
      <BlogArea {...data} />
    </main>
  )
}

export default Blog
