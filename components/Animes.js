import React from "react";
import Image from "next/image";
const Animes = ({ animes }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
      {animes.images?.map(({ url, width, height, image_id, tags }) => {
        return (
          <div
            key={image_id}
            className="mx-auto bg-slate-50  my-2 md:m-3   group   rounded overflow-hidden shadow-md hover:shadow-lg"
          >
            <Image
              className="w-full cursor-pointer group-hover:scale-110 transition-all ease-in duration-200"
              src={url}
              layout="responsive"
              width={width}
              height={height}
              alt={image_id}
            />
            <div className="cursor-pointer px-6 py-4">
              <p className="text-gray-700  group-hover:font-bold text-base">
                {tags[1]?.description}
              </p>
            </div>
            <div className=" cursor-pointer  px-6 pt-4 pb-2">
              {tags.map(({ tag_id, name }) => {
                return (
                  <span
                    key={tag_id}
                    className="inline-block  group-hover:font-bold bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    
                    <p>@{name}</p>
                    
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Animes;
