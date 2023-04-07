import Image from 'next/image'
import React from 'react'

async function getBlogs(){
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=item`, {cache:'no-store'});
  if(!res.ok) {
    throw new Error('Something went wrong');
  }
  return res.json();
}

export default async function Cms() {  
    const blogs = await getBlogs();
  return (
    
      
<div className=' max-w-6xl mx-auto py-6 grid grid-cols-4 gap-2'>


        
        

{/* <div className=' card'>
    <Image src='/images/shirt.webp' width={500} height={300} alt='shirt'></Image>
    <h1 className=' font-bold text-lg text-gray-500'>First Product</h1>
    <p className=' font-semibold line-clamp-2'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
</div> */}

</div>


    
  )
}
