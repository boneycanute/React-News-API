import React, { useEffect, useState } from "react";
import "./App.css";
import { LinearProgress } from "@mui/material";

function App() {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    var url =
      "https://newsapi.org/v2/everything?q=technology&from=2023-05-01&sortBy=publishedAt&apiKey=ad2f8f6ee02b4b5daa12032ed92fb380";
    var req = new Request(url);

    fetch(req).then((response) => {
      response.json().then((data) => {
        setData(data);
        setLoaded(true);
        console.log(data);
      });
    });
  }, []);
  if (loaded) {
    return (
      <div className="ArticlesContainer">
        {data.articles.map((article, index) => {
          return (
            <div className="article" key={index}>
              <img className="thumbnail" src={article.urlToImage} />
              <div className="text-content">
                <p className="title">{article.title}</p>
                <p className="content">{article.content}</p>
                <p className="published">{article.publishedAt}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <LinearProgress />;
  }
}

export default App;
