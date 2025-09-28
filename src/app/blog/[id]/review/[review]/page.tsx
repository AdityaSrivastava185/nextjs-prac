import React from 'react'

const ReviewPage = async ({params} : {params : Promise<{review:string , id:string}>}) => {
    const {review , id} = await params;
  return (
    <div>
      this is the review page -  routes {review} {id}
    </div>
  )
}

export default ReviewPage
