import React from 'react'
import { useState ,useEffect } from 'react'
import { useParams } from 'react-router'
import {client} from '../client'
import Spinner from './Spinner'
import { feedQuery, searchQuery } from '../utils/data'
import MasonryLayout from './MasonryLayout'
const Feed = () => {
  const [loading, setloading] = useState(false)
  const [pins, setpins] = useState()
   const {categoryId} = useParams();

  useEffect(() => {
 setloading(true)
    if(categoryId)
 {
const query = searchQuery(categoryId);

client.fetch(query).then((data)=>{
setpins(data);
setloading(false)
})
 }
 else
 {
  client.fetch(feedQuery)
.then((data)=>{
setpins(data);
setloading(false)
})
 }
  }, [categoryId])
  
  if(loading)  return <Spinner message = 'we are making new ideas for your feed' />
  return (
    <div>
      {
        pins && <MasonryLayout pins ={pins}/>
      }
    </div>
  )
}

export default Feed
