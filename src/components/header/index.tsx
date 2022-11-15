import logo from "../../assets/logo.png";

export const Header = (props) => {
  let maxScore = props.maxScore;
  let scoreString = '';
  for(let i = parseInt(maxScore.toString().length); i < 8; i++){
    scoreString = scoreString + '0';
  }
  scoreString = scoreString + maxScore;
  const toggleMenu = () => {
    props.handleMenu();
  };
  return (
    <>
      <header>
        <div className="container-fluid d-flex justify-content-between">
          <div className="">
            <img src={logo} className="logo" alt="Stroke Zacki & Friends" />
          </div>
          <div className="d-block">
            <div className="d-block d-md-inline-block me-4 menu-link">
              <button onClick={() => toggleMenu()}>Stroke a friend</button>
            </div>
            <div className="d-inline-block main-font me-2">{scoreString}</div>
            <svg
              style="width:1.5rem;height:1.5rem; transform: translateY(-3px);"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M17 4V2H7V4H2V11C2 12.1 2.9 13 4 13H7.1C7.5 14.96 9.04 16.5 11 16.9V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V16.9C14.96 16.5 16.5 14.96 16.9 13H20C21.1 13 22 12.1 22 11V4H17M4 11V6H7V11L4 11M20 11L17 11V6H20L20 11Z"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};
