import "./App.css";
import Albums from "./components/Albums";
import Score from "./components/Score";
import React, { useState, useEffect } from "react";
import StrokesImg from "./images/strokes.webp";
import ModestMouseImg from "./images/modestMouse.jpg";
import RadioheadImg from "./images/radiohead.jpg";
import VelvetUndergroundImg from "./images/velvetUnderground.jpeg";
import BonIverImg from "./images/bonIver.jpeg";
import TalkingHeadsImg from "./images/talkingHeads.webp";
import FreddieImg from "./images/freddie.jpeg";
import lcdImg from "./images/lcd.jpeg";
import taylorImg from "./images/taylor.png";
import kaseyImg from "./images/kasey.webp";
import newOrderImg from "./images/newOrder.png";
import sufjanImg from "./images/sufjan.jpeg";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [albumArray, setAlbumArray] = useState([
    { img: StrokesImg, name: "The Strokes", clickStatus: false },
    { img: ModestMouseImg, name: "Modest Mouse", clickStatus: false },
    { img: RadioheadImg, name: "Radiohead", clickStatus: false },
    {
      img: VelvetUndergroundImg,
      name: "The Velvet Underground",
      clickStatus: false,
    },
    { img: BonIverImg, name: "Bon Iver", clickStatus: false },
    { img: TalkingHeadsImg, name: "Talking Heads", clickStatus: false },
    { img: FreddieImg, name: "Freddie Gibbs", clickStatus: false },
    { img: lcdImg, name: "LCD Soundsystem", clickStatus: false },
    { img: taylorImg, name: "Taylor Swift", clickStatus: false },
    { img: kaseyImg, name: "Kasey Musgraves", clickStatus: false },
    { img: newOrderImg, name: "New Order", clickStatus: false },
    { img: sufjanImg, name: "Sufjan Stevens", clickStatus: false },
  ]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  useEffect(() => {
    setAlbumArray(shuffle(albumArray));
  }, [albumArray, score]);

  const handleScore = (e) => {
    albumArray.forEach((element) => {
      if (
        element.name === e.target.alt ||
        element.name === e.target.textContent
      ) {
        //search through array to match to current item clicked on
        //if it has not been clicked, change click status
        if (element.clickStatus === false) {
          element.clickStatus = true;
          setScore(score + 1);
          if (score === best) {
            setBest(best + 1);
          }
        } else {
          if (score > best) {
            setBest(score);
            albumArray.forEach((element) => {
              element.clickStatus = false;
            });
          }
          albumArray.forEach((element) => {
            element.clickStatus = false;
          });
          setScore(0);
        }
      }
    });
  };

  return (
    <div className="App">
      <div className="headerAndScore">
        <div className="headers">
          <h1 className="header">Memory Card Game</h1>
          <h2 className="header">
            Get points for choosing an album, but don't click on the same album more than once!
          </h2>
        </div>
        <div className="score">
          <Score score={score} best={best} />
        </div>
      </div>
      <div className="albumsContainer">
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[0].img} name={albumArray[0].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[1].img} name={albumArray[1].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[2].img} name={albumArray[2].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[3].img} name={albumArray[3].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[4].img} name={albumArray[4].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[5].img} name={albumArray[5].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[6].img} name={albumArray[6].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[7].img} name={albumArray[7].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[8].img} name={albumArray[8].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[9].img} name={albumArray[9].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[10].img} name={albumArray[10].name} />
        </div>
        <div className="album" onClick={handleScore}>
          <Albums img={albumArray[11].img} name={albumArray[11].name} />
        </div>
      </div>
    </div>
  );
}

export default App;

//when you click on an album, useEffect to reshuffle the array and to add to the score
