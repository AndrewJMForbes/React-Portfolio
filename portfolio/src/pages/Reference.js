import photo1 from "../images/MDNdocs.png";
import photo2 from "../images/stackoverflow.png";
import photo3 from "../images/react.png";
import photo4 from "../images/w3schools.png";
import photo5 from "../images/npm.png";
import photo6 from "../images/bootstrap.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
    <h2>⇩ These are sites that I use as reference tools ⇩</h2>
      <div className="mainHomeContainer">
        <div className="homeContainer">
          <a className="site" href="https://developer.mozilla.org/en-US/">
            developer.mozilla.org
          </a>

          <Link to="https://developer.mozilla.org/en-US/">
            <img className="sitePhoto" src={photo1} alt="something" />
          </Link>
        </div>
        <div className="homeContainer">
          <a className="site" href="https://stackoverflow.com/">
            stackoverflow.com
          </a>

          <Link to="https://stackoverflow.com/">
            <img className="sitePhoto" src={photo2} alt="something" />
          </Link>
        </div>
        <div className="homeContainer">
          <a className="site" href="https://react.dev/">
            Reactjs.org
          </a>

          <Link to="https://react.dev/">
            <img className="sitePhoto" src={photo3} alt="something" />
          </Link>
        </div>
        <div className="homeContainer">
          <a className="site" href="https://www.w3schools.com/">
            w3schools.com
          </a>

          <Link to="https://www.w3schools.com/">
            <img className="sitePhoto" src={photo4} alt="something" />
          </Link>
        </div>
        <div className="homeContainer">
          <a className="site" href="https://www.npmjs.com/">
            npmjs.com
          </a>

          <Link to="https://www.npmjs.com/">
            <img className="sitePhoto" src={photo5} alt="something" />
          </Link>
        </div>
        <div className="homeContainer">
          <a
            className="site"
            href="https://blog.getbootstrap.com/2021/05/05/bootstrap-5/"
          >
            getbootstrap.com
          </a>

          <Link to="https://blog.getbootstrap.com/2021/05/05/bootstrap-5/">
            <img className="sitePhoto" src={photo6} alt="something" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
