"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const Content = () => {
  const [news, setNew] = useState();
  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=keyword&apiKey=b8c4fcb3801241fc9f0f75a55650b8fe",
      )
      .then((res) => {
        console.log(res.data.articles);
        setNew(res.data.articles);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const newsOnClick = (articles) => {
    router.push(`/NEWS_Detail?articles=${encodeURIComponent(articles.title)}`);
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-15 justify-center text-center mt-10 self-center-safe overflow-hidden rounded-lg bg-white">
        {news?.map((news, index) => (
          <Link href={`/NEWS_Detail?articles=${encodeURIComponent(news.title)}`} key={index} onClick={() => newsOnClick(news)} >
            <div className="border border-gray-300 h-80 w-100 rounded-4xl">
              <img src={news.urlToImage} alt="Politic" className="h-40 w-full rounded-t-4xl object-cover" />
              <p className="grid grid-cols-1">
                <h1 className="font-bold text-red-600 text-xl pt-2">
                  Breaking NEWS
                </h1>
                <h2 className="font-semibold text-lg text-blue-500">
                  {news.author}
                </h2>
                <p className="italic flex -center text-sm relative max-w-80 left-5 text-gray-400">
                  {news.title}
                </p>
                <span className="italic text-gray-500 cursor-pointer text-sm inline">
                  Read more...
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex self-center gap-5 m-5 ">
        <button className="bg-gray-300 border border-gray-200 cursor-pointer rounded-lg px-3 py-1 w-20 hover:bg-sky-100">
          Previos
        </button>
        <button className="bg-gray-300 border border-gray-200 cursor-pointer rounded-lg px-3 py-1 w-20 hover:bg-sky-100">
          Next
        </button>
      </div>
    </>
  );
};
export default Content;
