import "./Menu.scss";
import hero from "../../assets/Hero.png";
import star from "../../assets/star.svg";
import vector from "../../assets/Vector.svg";
import Button from "../../../modules/Button";
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-assets">
        <div className="menu__text">
          <div className="menu__left">
            <div className="menu__over">
              <h2>OVER 1000 USERS</h2>
            </div>
            <h1>
              Enjoy Foods All <br />
              Over The <span>World</span>
            </h1>
            <div className="menu__text-p">
              <p>
                EatLy help you set saving goals, earn cash back offers,
                <br /> Go to disclaimer for more details and get paychecks
                <br /> up to two days early. Get a <span>$20 bonus.</span>
              </p>
            </div>
          </div>

          <div className="menu__but">
            <Button variant="primary">
              <Link >Get start</Link>
              </Button>
              <Button variant="secondary">
              <Link >Go Pro</Link>
              </Button>
          </div>
          <div className="menu__trust">
            <img className="menu__vec" src={vector} alt="" />
            <div className="menu__trust-text">
              <p>Trustpilot</p>
            </div>
            <div className="menu__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={star} alt={`star ${i + 1}`} />
              ))}
            </div>
            <div className="menu__trust-text_p">
              <p>4900+</p>
            </div>
          </div>
        </div>
        <div className="menu__right">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
