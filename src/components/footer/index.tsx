import catsBG from "../../assets/cats.png";
import cats from "../../data/cats.json";

export const Footer = (props: any) => {
  let menuClasses = 'menu-wrapper';
  let tmpC: any = localStorage.getItem("scores");
  let scores = JSON.parse(tmpC);
  if(!scores)
    scores = [{'id' : 0, 'score' : 0}];
  const updateCat = (id:any) => {
    props.updateCat(id);
  }

  if(props.openMenu && scores)
    menuClasses = 'menu-wrapper active';
   let catsMenu = <><div className="row cat-wrapper">
      {cats.map((cat) => {
        let catScore = 0;
        let score = scores.filter((score:any) => score.id == cat.id);
        if(score.length)
          catScore = score[0].score;
        return(<div key={cat.id} className="col-3">
          <button className="cursor-pointer;" onClick={() => updateCat(cat.id)}>
          <img src={`./images/${cat.image}`} alt="" className="w-100"/>
          <div className="white-font mt-3 display-5 ">
            {cat.name}<br/>{catScore}
          </div>
          </button>
          </div>)
      })}
    </div></>
  return (
    <>
      <div className={menuClasses}>
        <div
          className="footer__bg"
          style={{ backgroundImage: `url(${catsBG})` }}
        ></div>
        <div
          className="footer__bg--2"
          style={{ backgroundImage: `url(${catsBG})` }}
        ></div>
        <div className="footer__menu-container">
          {catsMenu}
        </div>
      </div>

      <footer style="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 text-start">
              <p style="font-size:1rem;">
                &copy; famous instagram model{" "}
                <a
                  href="https://www.instagram.com/zacki.the.cat"
                  target="_blank"
                >
                  zacki.the.cat
                </a>
              </p>
            </div>
            <div className="col-6 text-end"><button className="white-font" onClick={() => {localStorage.clear();location.reload();}}>Restart</button></div>
          </div>
        </div>
      </footer>
    </>
  );
};
