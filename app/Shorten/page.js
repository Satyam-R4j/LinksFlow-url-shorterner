"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);
  const handleChange = (params) => {};

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg shadow-xl shadow-neutral-400">
      <h1 className="font-bold text-3xl my-2 mx-2 pb-3">
        Generate your short URLs
      </h1>
      <div className="flex flex-col my-3 gap-y-4">
        <input
          value={url}
          className="py-3 px-3 rounded-lg text-xl"
          type="text"
          placeholder="Enter your URL"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          value={shortUrl}
          className="py-3 px-3 rounded-lg text-xl"
          type="text"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => {
            setShortUrl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="bg-purple-500 w-19 text-lg  mx-auto rounded-lg shadow-lg p-3 py-2 font-bold text-white"
        >
          Generate
        </button>
      </div>
      {generated && (
        <code>
         Your Link:  <Link target="_blank" href={generated} >{generated}</Link> 
        </code>
      )}
    </div>
  );
};

export default Shorten;
