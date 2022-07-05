import React from 'react'
import Image from "next/image";
const Intro = ({pic,title,heading,paragraph,isLeft}) => {
  return (

        <div className={isLeft?"bg-white flex-row-reverse my-10  group  md:flex items-center  justify-between rounded-xl":" bg-white my-10 group  md:flex items-center  justify-between rounded-xl"}>
      <div className="capitalize w-full md:w-[60%]  group  space-y-2 p-5">
        
        <h1 className="font-serif text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-green-600 text-3xl md:text-6xl font-extrabold  transition-colors duration-100 ease-in">{title}</h1>
        <p className="md:text-2xl ">{heading}</p>
        <p className="font-bold text-sm ">{paragraph}</p>
      </div>
        <div className="hidden bg-slate-100  relative max-w-[384px] w-96 h-96 md:block   z-[1]">
        <Image
          src={pic.url}
          layout="fill"
          alt="Anime"
          objectFit="cover"
          placeholder='blur'
          blurDataURL={pic.url}
          className=" group-hover:scale-150 transition-all duration-200 "
        />
        </div>
      </div>

  )
}

export default Intro
