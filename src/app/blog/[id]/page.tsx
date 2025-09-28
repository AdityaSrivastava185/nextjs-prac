import React from 'react'

const BlogPostPage = async ({params} : {params : Promise<{id:string}>}) => {
  const id = (await params).id
  return (
    <div>
      this is the blog post page -  routes {id}
    </div>
  )
}

export default BlogPostPage
