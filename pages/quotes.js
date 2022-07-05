import React, { useEffect, useState } from "react";
import Quote from "../components/Quote";
import Search from "../components/Search";
import Intro from "../components/Intro";

export async function getServerSideProps() {
  const kill_res = await fetch("https://waifu.pics/api/sfw/kill");
  const kill_data = await kill_res.json();

  const quote_res = await fetch("https://animechan.vercel.app/api/quotes");
  const quote_data = await quote_res.json();

  return {
    props: {
      kill: kill_data,
      quotes: quote_data,
    },
  };
}

const Quotes = ({ kill, quotes }) => {
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [quotesData, setQuotesData] = useState([]);

  const getQuotes = (e) => {
    e.preventDefault();
    const getData = async function () {
      const res = await fetch("https://animechan.vercel.app/api/quotes");
      const data = await res.json();
      setQuotesData(data);
    };
    getData();
  };

  useEffect(() => {
    const getData = async function () {
      const res = await fetch("https://animechan.vercel.app/api/quotes");
      const data = await res.json();
      setQuotesData(data);
    };
    getData();
  }, []);

  return (
    <div className="mt-6 py-16 md:py-24 max-w-6xl mx-auto">
      <Search
        funCall={getQuotes}
        keywords={keywords}
        setKeywords={setKeywords}
      />
      <Intro
        loading={loading}
        pic={kill}
        setLoading={setLoading}
        title={"Animes Quotes"}
        heading="Get quotes❤️ of your favourite♨️ Animes Character's Quote Like"
        paragraph={"Ergo Proxy,Haruhi Suzumiya,Basara Tōjō etc."}
        isLeft={true}
      />
      {quotesData.length != 0 && <Quote quotes={quotesData} />}
      <Quote quotes={quotes} />
    </div>
  );
};

export default Quotes;
