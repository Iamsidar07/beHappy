import Head from "next/head";
import { useState } from "react";
import CrushIntro from "../components/CrushIntro";
import Intro from "../components/Intro";


export async function getServerSideProps() {
  // const anime_res = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
  // const anime_data = await anime_res.json();

  const kiss_res = await fetch("https://waifu.pics/api/sfw/kiss");
  const kiss_data = await kiss_res.json();

  const happy_res = await fetch("https://waifu.pics/api/sfw/happy");
  const happy_data = await happy_res.json();

  const meme_res = await fetch("https://api.catboys.com/img");
  const meme_data = await meme_res.json();

  const smile_res = await fetch("https://waifu.pics/api/sfw/smile");
  const smile_data = await smile_res.json();

  const kill_res = await fetch("https://waifu.pics/api/sfw/kill");
  const kill_data = await kill_res.json();
  return {
    props: {
      // animes: anime_data.data,
      kiss: kiss_data,
      happy: happy_data,
      kill: kill_data,
      meme: meme_data,
      smile: smile_data,
    },
  };
}

export default function Home({ kiss, happy, kill, meme, smile }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="  bg-white">
      <Head>
        <title>Manoj</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div className="py-24 px-3 md:py-36 max-w-6xl mx-auto">

        <CrushIntro loading={loading} pic={kiss} setLoading={setLoading} />
        <Intro
          loading={loading}
          pic={kill}
          setLoading={setLoading}
          title={"Animes Quotes🦆"}
          heading="Get quotes❤️ of your favourite♨️ Animes Character's Quote Like"
          paragraph={"Ergo Proxy,Haruhi Suzumiya,Basara Tōjō etc."}
          isLeft={true}
        />
        <Intro
          loading={loading}
          pic={smile}
          setLoading={setLoading}
          title={"Anime Collections"}
          heading="Get Your Favourite 🥰Animes from various categories Like"
          paragraph={"smile,selfie,milf,assetc."}
          isLeft={false}
        />
        <Intro
          loading={loading}
          pic={happy}
          setLoading={setLoading}
          title={"Funny Jokes"}
          heading="Get Your Favourite Jokes🤣 from various categories Like"
          paragraph={"Sex,Political,nsfw,etc."}
          isLeft={true}
        />
        <Intro
          loading={loading}
          pic={meme}
          setLoading={setLoading}
          title={"Favourite Memes "}
          heading="Get Your Favourite Memes😀 from here from various categories Like"
          paragraph={"Chuck Noris,Sexist,Christmas,etc."}
          isLeft={false}
        />


      </div>
    </div>
  );
}
