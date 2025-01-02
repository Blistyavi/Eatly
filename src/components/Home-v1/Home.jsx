import home from "../../assets/BG.png"
import "./Home.scss"
const Home = () => {
    return (  
        <div className="home">
        <img src={home} alt="" />
        <div className="home-assets">
            <div className="home__costumers">
                <h3>10K+</h3>
                <p>Satisfied Costumers <br />
                All Great Over The World </p>
            </div>
            <div className="home__dishes">
                <h3>4M</h3>
                <p>Healthy Dishes Sold <br />
                    Including Milk Shakes Smooth </p>
            </div>
            <div className="home__reliable">
                <h3>99.99%</h3>
                <p>Reliable Customer Support <br />
                    We Provide Great Experiences</p>
            </div>
        </div>
        </div>
    );
}
 
export default Home;