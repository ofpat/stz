import { useState, useEffect } from "preact/hooks";
import {
  Notification,
  Color,
  info,
  success,
  warning,
  error,
} from "./components/notify";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import cats from "./data/cats.json";

import preactLogo from "./assets/zacki.png";
import audio8 from "./assets/meows/short-meow-orig.mp3";
import audio1 from "./assets/meows/short_1.mp3";
import audio2 from "./assets/meows/short_2.mp3";
import audio3 from "./assets/meows/short_3.mp3";
import audio4 from "./assets/meows/short_4.mp3";
import audio5 from "./assets/meows/short_5.mp3";
import audio6 from "./assets/meows/short_6.mp3";
import audio7 from "./assets/meows/short_7.mp3";
import "./app.css";

export function App() {
  let maxScore = 0;
  let catId: number = 0;
  let scores = [{ id: 0, score: 0 }];
  // let currentScore = scores.filter((score) => score.id === catId);
  let currentCatScore = 0;

  if (localStorage.getItem("catId")) {
    catId = localStorage.getItem("catId");
    maxScore = localStorage.getItem("maxScore");
    scores = JSON.parse(localStorage.getItem("scores"));
    let score = scores.filter((score) => score.id == catId);
    currentCatScore = score[0].score;
  }
  let catImg = cats[catId].image;
  let catName = cats[catId].name;
  let countStart: any = 0;
  if (sessionStorage.getItem("count"))
    countStart = sessionStorage.getItem("count");
  const [count, setCount] = useState(currentCatScore);
  const [toggled, setToggled] = useState(false);
  const [currentId, setCurrentId] = useState(catId);
  const [maxScoreNum, setMaxScoreNum] = useState(maxScore);

  const clickZacki = () => {
    let counted: any = parseInt(count) + 1;
    sessionStorage.setItem("count", counted);
    const id = "sound" + Math.floor(Math.random() * (16 - 1 + 1) + 1);
    var audioElement: any = document.getElementById(id);
    audioElement.currentTime = 0;
    if (audioElement) audioElement.play();
    setCount(counted);
    let changedEntry = false;
    let tmpScore = {"id" : currentId, score: counted};
    scores = scores.map((score) => {
      if(score.id == currentId){
        score = tmpScore;
        changedEntry = true;
      }
      return score;
    });
    if(!changedEntry)
    scores.push(tmpScore);
    let maxScoreTmp = parseInt(maxScoreNum) + 1;
    setMaxScoreNum(maxScoreTmp);
    localStorage.setItem("maxScore", maxScoreTmp);
    localStorage.setItem("scores", JSON.stringify(scores));
  };

  const [notifications, setNotifications] = useState([]);
  const message = "This is a notification!";
  const createNotification = (color) =>
    setNotifications([...notifications, { color, id: notifications.length }]);

  const toggleMenu = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
  }, [currentId]);

  useEffect(() => {
    console.log(toggled);
  }, [toggled]);

  useEffect(() => {
    localStorage.setItem("catId", catId);
    localStorage.setItem("maxScore", maxScore);
    localStorage.setItem("scores", JSON.stringify(scores));
    /* localStorage.clear(); */
  }, []);

  const updateCat = (id) => {
    let updateScores = JSON.parse(localStorage.getItem("scores"));
    let tmpScore = {"id" : id, score: 0};
    let updateScore = scores.filter((score) => score.id == id);
    if(!updateScore.length){
      updateScores.push(tmpScore);
      localStorage.setItem("scores", JSON.stringify(updateScores));
      setCount(0);
    }
    else {
      setCount(updateScore[0].score);
    }
    localStorage.setItem("catId", id);
    setCurrentId(id);
    setToggled(!toggled);
  }

  return (
    <>
      <main>
        <Header handleMenu={toggleMenu} maxScore={maxScoreNum}/>
        <p style="" className="counter__txt">
          You have stroked {catName} <br />
          <span className="counter__value">{count} time(s).</span>
        </p>
        <button className="d-none" onClick={() => createNotification(Color.info)}>Info</button>
        {notifications.map(({ id, color }) => (
          <Notification key={id} color={color} autoClose={true}>
            {message}
          </Notification>
        ))}

        <div class="stroke-container px-4 px-md-0">
          <button onClick={clickZacki} className="click-cat">
            <img
              src={`./images/${catImg}`}
              className="preact"
              alt="Preact logo"
            />
          </button>
        </div>
        <Footer openMenu={toggled} updateCat={updateCat}/>
      </main>

      <audio id="sound1" src={audio1} type="audio/mp3"></audio>
      <audio id="sound2" src={audio2} type="audio/mp3"></audio>
      <audio id="sound3" src={audio3} type="audio/mp3"></audio>
      <audio id="sound4" src={audio4} type="audio/mp3"></audio>
      <audio id="sound5" src={audio5} type="audio/mp3"></audio>
      <audio id="sound6" src={audio6} type="audio/mp3"></audio>
      <audio id="sound7" src={audio7} type="audio/mp3"></audio>
      <audio id="sound8" src={audio8} type="audio/mp3"></audio>
      <audio id="sound9" src={audio1} type="audio/mp3"></audio>
      <audio id="sound10" src={audio2} type="audio/mp3"></audio>
      <audio id="sound11" src={audio3} type="audio/mp3"></audio>
      <audio id="sound12" src={audio4} type="audio/mp3"></audio>
      <audio id="sound13" src={audio5} type="audio/mp3"></audio>
      <audio id="sound14" src={audio6} type="audio/mp3"></audio>
      <audio id="sound15" src={audio7} type="audio/mp3"></audio>
      <audio id="sound16" src={audio8} type="audio/mp3"></audio>
    </>
  );
}
