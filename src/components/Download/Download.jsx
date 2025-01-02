import "./Download.scss"
import download from "../../assets/Mobile.png"
import arrow from "../../assets/Vector 14.png"
import Button from "../../../modules/Button"
import { Link } from 'react-router-dom';
import arrowr from '../../assets/arrow-right.svg';



const Download = () => {
    return ( 
        <div className="download">
            <img src={download} alt="" />
            <div className="download-assets">
                <div className="download__text">
                    <h2>Premium <span>Quality</span> <br /> For You Health</h2>
                    <ul>
                        <li>Premium quality food is made with ingredients that <br /> are packed with essential vitamins, minerals.</li>
                        <li>These foods promote overall wellness by support <br /> healthy digestion and boosting immunity</li>
                    </ul>
                </div>
                <div className="download__button">
                <Button variant="primary" icon={arrowr} >
        <Link to="./Download" >Download</Link>
      </Button>
                    </div>
                    <div className="download-img__button">
                        <img src={arrow} alt="" />
                        </div>

                        
            </div>
        </div>
     );
}
 
export default Download;