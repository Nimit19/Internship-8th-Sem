// "use client";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
// import React, { useEffect, useState } from "react";

const NewsPage = async () => {
  // 1] Client Side Fetching
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [news, setNews] = useState();

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     setLoading(true);
  //     const response = await fetch("http://localhost:8080/news");

  //     if (!response.ok) {
  //       setError("Failed to fetch news");
  //       setLoading(false);
  //     }

  //     const news = await response.json();
  //     setNews(news);
  //     setLoading(false);
  //   };

  //   fetchNews();
  // });

  // let newsContent;
  // if (error) {
  //   newsContent = <p> {error} </p>;
  // }
  // if (loading) {
  //   newsContent = <p> Loading... </p>;
  // }
  // if (news) {
  //   newsContent = <NewsList news={news} />;
  // }

  // 2] Server Side Fetching
  // const response = await fetch("http://localhost:8080/news");

  // const news = await response.json();

  // if (!response.ok) {
  //   throw new Error("Failed to fetch news");
  // }

  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      {/* {newsContent} */}
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
