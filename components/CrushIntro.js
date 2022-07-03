import React from 'react'
import CrushTalk from './CrushTalk'
import Image from 'next/image';

const CrushIntro = ({loading,pic,setLoading,isLeft}) => {
  return (
    <div className={isLeft?" flex-row-reverse   group md:flex items-center  justify-between rounded-xl":" group md:flex items-center  justify-between rounded-xl"}>
        
        <div className=" w-full md:w-[60%] h-full group  space-y-2 p-5">
        <h1 className="  text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-black text-2xl md:text-5xl font-bold  transition-colors duration-100 ease-in">Crush Talk</h1>
        <CrushTalk/>
        </div>
        <div className="hidden bg-slate-100 rounded-md relative max-w-[384px] w-96  h-96 md:block">
        <Image
          src={pic?.url}
          layout="fill"
          alt="Anime"
          objectFit="cover"
          onLoadingComplete={()=>setLoading(true)}
          className="rounded-xl group-hover:scale-125 transition-all duration-500 "
        />
        </div>
      </div>

  )
}

export default CrushIntro
