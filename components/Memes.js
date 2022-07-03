import React from 'react'
import Image from 'next/image'
const Memes = ({memes}) => {
  console.log(memes)
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
      {memes?.map(({url,id})=>{
        console.log(url)
        return <div key={id} className="bg-black/90 rounded-md relative  m-1 md:m-3  h-72 md:hover:scale-105 duration-100 ease-in cursor-pointer bg-blend-darken ">
            <Image 
                src={url}
                layout="fill"
                objectFit='contain'
                alt={id}
            />
        </div>
      })}
    </div>
  )
}

export default Memes
