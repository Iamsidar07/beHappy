import React from 'react'

  
const Quote = ({quotes}) => {

  return (
    <div className='font-serif grid grid-cols-1 md:grid-cols-2 p-2 md:p-3 '>
     {
        quotes?.length==0? 
        <p>Loading</p>
        :quotes?.map(quote=>{
            return <div className='md:hover:shadow-xl border bg-yellow-400/80 md:bg-white shadow-slate-300/50 group my-1 md:m-3 p-1 md:p-3 rounded-[2px] sm:hover:scale-105 transition-all duration-200 ease-in transform cursor-pointer  ' key={quote.character}>
        <h1 className='font-bold text-3xl  my-2 text-gray-800/75'><small className='text-gray-400 text-xl  font-normal'>Character-</small>{quote.character}</h1>
        <p >{quote?.quote}</p>
        <p className=' font-semibold sm:opacity-0 group-hover:opacity-100 duration-500 text-red-500'><small className='text-gray-400 '>Anime-</small>{quote?.anime}</p>
      </div>
        })
      }
    </div>
  )
}

export default Quote
