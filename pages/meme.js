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
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemes(data.data.memes);
    };
    getData();
  };

  useEffect(() => {
    const getData = async function () {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemes(data.data.memes);
    };
    getData();
  }, []);

  console.log(memes);

  return (
    <div className="max-w-sm md:py-10  md:max-w-6xl mx-auto">
      <Search
        funCall={getMemes}
        keywords={keywords}
        setKeywords={setKeywords}
      />

      <Intro
        loading={loading}
        pic={meme}
        setLoading={setLoading}
        title={"Favourite Memes"}
        heading="Get Your Favourite Memes🤣 from here from various categories Like"
        paragraph={"Chuck Noris,Sexist,Christmas,etc."}
        isLeft={true}
        url="/meme"
        category={"Memes"}
        isBtn={false}
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
