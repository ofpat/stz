import { useState } from "preact/hooks";

import preactLogo from "./assets/zacki.png";
import catsBG from "./assets/cats.png";
import audio1 from "./assets/meows/short-meow-deep-3.mp3";
import audio2 from "./assets/meows/short-meow-deep.mp3";
import audio3 from "./assets/meows/short-meow-high.mp3";
import audio4 from "./assets/meows/short-meow-orig.mp3";
import "./app.css";

export function App() {
  let countStart: any = 0;
  if (sessionStorage.getItem("count"))
    countStart = sessionStorage.getItem("count");
  const [count, setCount] = useState(countStart);

  const clickZacki = () => {
    let counted: any = parseInt(count) + 1;
    sessionStorage.setItem("count", counted);
    const id = "sound" + Math.floor(Math.random() * (4 - 1 + 1) + 1);
    var audioElement: any = document.getElementById(id);
    if (audioElement) audioElement.play();
    setCount(counted);
  };

  return (
    <>
      <div>
        <h1>
          <span>Stroke</span>
          <br />
          Zacki
        </h1>

        <p style="" className="counter__txt">
          You have stroked Zacki <br />
          <span className="counter__value">{count} time(s).</span>
        </p>
      </div>
      <div class="card">
        <button onClick={clickZacki}>
          <img
            style="transform:translateX(-2rem)"
            src={preactLogo}
            class="preact"
            alt="Preact logo"
          />
        </button>
      </div>
      <div
        className="footer__bg"
        style={{ backgroundImage: `url(${catsBG})` }}
      ></div>
      <footer style="position: absolute;bottom: 1rem;text-align:center;left:50%;transform:translateX(-50%);">
        <p style="font-size:1rem;">
          &copy; famous instagram model{" "}
          <a href="https://www.instagram.com/zacki.the.cat" target="_blank">
            zacki.the.cat
          </a>
        </p>
      </footer>
      <audio id="sound1" src={audio1} type="audio/mp3"></audio>
      <audio id="sound2" src={audio2} type="audio/mp3"></audio>
      <audio id="sound3" src={audio3} type="audio/mp3"></audio>
      <audio id="sound4" src={audio4} type="audio/mp3"></audio>
    </>
  );
}
