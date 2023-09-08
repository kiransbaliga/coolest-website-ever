import { useState } from "react";
import "./MainContent.css";
import { data } from "../../constants/data";

import NavButton from "../navButtons/navButton";
const MainContent = () => {
  const [articleid, setArticle] = useState(0);
  const handleNext = () => {
    setArticle((articleid + 1) % data.length);
  };
  const handlePrev = () => {
    if (articleid === 0) setArticle(data.length - 1);
    else setArticle((articleid - 1) % data.length);
  };
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const onMouseMove = (e: any) =>{
    setCursorPosition({ top: e.screenY, left: e.screenX });
    console.log(cursorPosition);
  }
  // return <div onMouseMove={onMouseMove} >
  //          <div style={{position: 'absolute', ...cursorPosition }} />
  //        </div>

  return (
    <main>
      {data.map((article, index) => {
        return (
          <article
            key={index}
            className={index === articleid ? "fadeIn" : "fadeOut"}
          >
            <div className="article-image article-section" onMouseMove={onMouseMove}>
              <img src={article.img} alt="image" />
            </div>
            <div className="article-desc article-section" onMouseMove={onMouseMove}>
              <h1>{article.desc_title}</h1>
              <p>{article.desc}</p>
              <div className="imground" style={{position:'absolute',...cursorPosition}}></div>
            </div>
            <div className="article-title article-section">
              <h2>{article.title}</h2>
              <i className="fa-beat-fade fa-solid fa-fire"></i>
            </div>
            <div className="article-nav article-section">
              <NavButton handleNext={handleNext} handlePrev={handlePrev} />
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default MainContent;
