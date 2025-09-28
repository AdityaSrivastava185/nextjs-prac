import React from 'react'

export const metadata = {
    title : "docs page",
    description : "this is the docs page"
}

const Docs = async ({params} : {params : Promise<{slug:string[]}>}) => {
  const slug = (await params).slug
  return (
    <div>
      this is the docs page -  routes {slug.join("/")}
    </div>
  )
}

export default Docs
