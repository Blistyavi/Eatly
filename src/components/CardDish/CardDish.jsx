import stars from "../../assets/star2.svg";
import heart from "/src/assets/Icon.svg"

import "./CardDish.scss"

const CardDish = (dish) => {
    return ( 
        <>
        <div key={dish.index} className="top__dish">
        <div className="top__dish-heart">
            <img src={heart} alt="" />
              </div>
              <div className="top__dish-img">
                <img src={dish.image} alt="" />
              </div>
              

              <div className="top__dish-content">
                <p className={dish.color}>{dish.info}</p>
                <h4>{dish.title}</h4>
                <div className="top__dish-bottom">
                  <div className="top__dish-item">
                    <p>{dish.time}</p>
                    <img src={stars} alt=""></img>
                    <p> {dish.rating}</p>
                  </div>
                  
                </div>
                <div className="top__dish-price">
                    <h5>${dish.price}<span>.99</span></h5>

                    <button>+</button>
                </div>

              </div>
              
            </div>
        </>
     );
}
 
export default CardDish;