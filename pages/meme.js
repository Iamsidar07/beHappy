import React, { useEffect, useState } from "react";
import Memes from "../components/Memes";
import Search from "../components/Search";
import Intro from "../components/Intro";

export async function getServerSideProps() {
  const meme_res = await fetch("https://api.catboys.com/img");
  const meme_data = await meme_res.json();

  return {
    props: {
      meme: meme_data,
    },
  };
}

const Meme = ({ meme }) => {
  const [keywords, setKeywords] = useState("Political");
  const [loading, setLoading] = useState(false);
  const [memes, setMemes] = useState([]);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY2;
  const getMemes = (e) => {
    e.preventDefault();
    const getData = async function () {
      const res = await fetch(
        `https://api.humorapi.com/memes/search?api-key=${apiKey}&keywords=${keywords}&media-type=image&media-type=video&number=10`
      );
      const data = await res.json();
      setMemes(data.memes);
    };
    getData();
  };



setTimeout(() => {
    const getData = async function () {
      const res = await fetch(
        `https://api.humorapi.com/memes/search?api-key=${apiKey}&keywords=${keywords}&media-type=image&media-type=video&number=10`
      );
      const data = await res.json();
      setMemes(data.memes);
    };
    getData();
  }, 100);

useEffect(()=>{
  const getData = async function () {
    const res = await fetch(
      `https://api.humorapi.com/memes/search?api-key=${apiKey}&keywords=${keywords}&media-type=image&media-type=video&number=10`
    );
    const data = await res.json();
    setMemes(data.memes);
  };
  getData();
},[keywords,apiKey])

  

  return (
    <div className="py-16 md:py-24  max-w-6xl mx-auto">
      <Search
        funCall={getMemes}
        keywords={keywords}
        setKeywords={setKeywords}
      />

      <Intro
        loading={loading}
        pic={meme}
        setLoading={setLoading}
        title={"Favourite Memes "}
        heading="Get Your Favourite Memes🤣 from here from various categories Like"
        paragraph={"Chuck Noris,Sexist,Christmas,etc."}
        isLeft={true}
      />

      {memes?.length != 0 && (
        <>
          <h1 className="md:text-3xl font-bold text-gray-400 p-3">
            Showing {keywords} Memes results{" "}
          </h1>
          <Memes memes={memes} />
        </>
      )}
    </div>
  );
};

export default Meme;
