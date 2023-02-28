import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import { client, urlFor } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);
 const navigate = useNavigate()
 
  const imageUrl = image ? urlFor(image).width(250).url() : null;
  return (
    <div className='m-2'>
<div
onMouseEnter={()=>setPostHovered(true)}
onMouseLeave={()=>setPostHovered(false)}
onClick={()=> navigate(`/pin-detail/${_id}`)}>


</div>





      {/* {imageUrl ? (
        <img src={imageUrl} alt="user-post" className='rounded-lg w-full' />
      ) : (
        <div>Image not found</div>
      )} */}
    </div>
  )
}

export default Pin
