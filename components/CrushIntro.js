import React from 'react'
import CrushTalk from './CrushTalk'
import Image from 'next/image';

const CrushIntro = ({loading,pic,setLoading,isLeft}) => {
  return (
    <div className={isLeft?" flex-row-reverse  mt-5 md:mt-2 group md:flex items-center  justify-between rounded-xl":"mt-5 md:mt-2 group md:flex items-center  justify-between rounded-xl"}>
        
        <div className=" w-full h-full md:w-[60%]  group  space-y-2 py-1 md:p-5">
        <h1 className="  text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-black text-3xl md:text-6xl font-bold  transition-colors duration-100 ease-in">Crush Talk❤️</h1>
        <CrushTalk/>
        </div>
        <div className="hidden bg-slate-100 rounded-md relative max-w-[384px] w-96  h-96 md:block">
        <Image
          src={pic?.url}
          layout="fill"
          alt="Anime"
          objectFit="cover"
          placeholder='blur'
          blurDataURL={pic?.url}
          onLoadingComplete={()=>setLoading(true)}
          className="rounded-xl group-hover:scale-150 transition-all duration-200 "
        />
        </div>
      </div>

  )
}

export default CrushIntro
