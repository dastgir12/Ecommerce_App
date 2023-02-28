import React from 'react'
import { client, urlFor } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  const imageUrl = image ? urlFor(image).width(250).url() : null;

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="user-post" className='rounded-lg w-full' />
      ) : (
        <div>Image not found</div>
      )}
    </div>
  )
}

export default Pin
