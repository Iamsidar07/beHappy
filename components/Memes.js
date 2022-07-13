import React from 'react'
import Image from 'next/image'
const Memes = ({memes}) => {

  let topMemes=[];
  for (let index = 0; index < 30; index++) {
    const element = memes[index];
    topMemes.push(element) 
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
      {topMemes?.map(({url,id,name})=>{
        return <div key={id} className={url==undefined?"hidden ":"bg-gray-200/5 rounded relative  m-1 md:m-3  h-72 md:hover:scale-105 duration-100 ease-in cursor-pointer bg-blend-darken "}>
            <Image 
                src={url}
                layout="fill"
                objectFit='contain'
                alt={id}
                placeholder='blur'
                blurDataURL={url}
            />
        </div>
      })}
    </div>
  )
}

export default Memes
