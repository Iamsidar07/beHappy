import Image from "next/image";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import WeatherCard from "../components/WeatherCard";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    name: "",
    visibility: "",
    pressure: "",
    humidity: "",
    temp: "",
    main: "",
    windSpeed: "",
    code:""
  });

  const [keywords, setKeywords] = useState("Delhi");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY3,
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  const getWeather = (e) => {
    e.preventDefault();

    const getData = async function () {
    try {
        const res = await fetch(
          `https://community-open-weather-map.p.rapidapi.com/weather?q=${keywords}&units=metric&mode=JSON`,
          options
        );
        const data = await res.json();
  
        setWeatherData(() => {
          if(data.cod=='404'){
            return {
              name: "⚠️ Not found",
              visibility: "",
              pressure: "",
              humidity: "",
              temp: "",
              main: "",
              windSpeed: "",
              code:"404",
            }
          }else{
            return {
              name: data?.name,
              visibility: data?.visibility,
              pressure: data?.main?.pressure,
              humidity: data?.main?.humidity,
              temp: data?.main?.temp,
              main: data?.weather[0]?.main,
              windSpeed: data?.wind?.speed,
              code:"200"
            };
          }
        });
        console.log(data, weatherData);
        
      }
     catch (error) {
      console.log(error.message)
    }
    }
    getData();
    getRandomImage(weatherData.main);
  };

  useEffect(() => {
    const getData = async function () {
      try {
        const res = await fetch(
          `https://community-open-weather-map.p.rapidapi.com/weather?q=${keywords}&units=metric&mode=JSON`,
          options
        );
        const data = await res.json();
        setWeatherData(() => {
          // console.log(data.name)
          return {
          name: data?.name,
          visibility: data?.visibility,
          pressure: data?.main?.pressure,
          humidity: data?.main?.humidity,
          temp: data?.main?.temp,
          main: data?.weather[0]?.main,
          windSpeed: data?.wind?.speed,
          };
        });
      } catch (error) {
        console.log({error});
      }

    };
    getData();
    getRandomImage(weatherData.main);
  }, []);

  const [imageURL, SetImageURL] = useState(
    "https://images.unsplash.com/photo-1599003037815-6ddc6a0e93a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlzdHx8fHx8fDE2NTY5ODUzNzQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
  );
  const getRandomImage = async (mausam) => {
    try {
      const randomImg = await fetch(
        `https://source.unsplash.com/random/?${mausam}`
      );
      console.log(randomImg.url);
      SetImageURL(randomImg.url);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=delhi&units=imperial&mode=JSON', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  return (
    <div className="mt-40 min-h-screen">
      <div className="fixed z-[-1] min-h-screen top-0 left-0 right-0 bottom-0">
        <Image src={imageURL} layout="fill" objectFit="cover" />
      </div>
      <Search
        funCall={getWeather}
        keywords={keywords}
        setKeywords={setKeywords}
      />
      <WeatherCard data={weatherData} />
    </div>
  );
};

export default Weather;
