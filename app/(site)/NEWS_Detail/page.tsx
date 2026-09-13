"use client"; 
import Topbar from "../../components/Topbar";


import axios from "axios"; 
import { useEffect, useState } from "react"; 
import { useSearchParams } from "next/navigation"; 

export default function Layout() { 
    const searchParams = useSearchParams(); 
    const title = searchParams.get("articles"); 
    const [news, setNews] = useState(null); 
    
    useEffect(() => { 
        axios.get( 
            `https://newsapi.org/v2/everything?q=${title}&apiKey=b8c4fcb3801241fc9f0f75a55650b8fe` 
        ) 
        .then((res) => { 
            setNews(res.data.articles[0]); 
        }); 
        },[title]); 
        
        if(!news) 
            { 
            return <h1> Loading... </h1>; 
           }

  return (
    <>
      <Topbar />

      <h1 className="flex self-center text-5xl max-w-[70%] ml-50 font-bold my-10">
        {news.title}
      </h1>

      <h1 className="flex self-center text-2xl max-w-[70%] ml-50 font-bold my-10">
        {news.description}
      </h1>

      <p className="ml-84 -mt-5 mb-5 font-semibold">
        {news.publishedAt}
      </p>

      <img
        src={news.urlToImage}
        alt="Image"
        className="flex self-center w-250 h-100 ml-40"
      />

      <div className="bg-gray-50 mt-10 pt-5 inset-shadow-sm rounded-lg">
        <div className="mb-10 pl-5 px-10 self-center flex justify-center ml-20">
          <p className="mb-10 max-w-[80%] max-h-auto pl-5 text-sm text-gray-600 leading-8 ml-8 border-l-4 border-gray-300">
            {news.content}
          </p>
        </div>
      </div>
    </>
  );
}