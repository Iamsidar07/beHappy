import React from 'react'

const Joke = ({data,keywords}) => {
  
  return (
    <div className='font-serif grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p1 md:p-3 '>
      {data?.map(({value,icon_url,id})=>{
        return<div className=' md:m-3 group md:hover:shadow-md border bg-slate-50 rounded-md group m-1 p-1 md:p-3  sm:hover:scale-105 transition-all duration-200 ease-in transform cursor-pointer' key={id}>
        <p >{value}</p>
        <p className='text-sm font-bold group-hover:text-red-500 md:opacity-0 group-hover:opacity-100 '>Keyword-{keywords}</p>
        
      </div>
      })}
    </div>
  )
}

export default Joke
