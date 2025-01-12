import CardDish from "../CardDish/CardDish";
import { Link } from "react-router-dom";
import Button from "../../../modules/Button";
import arrowr from "../../assets/arrow_right.png"
import "./TopDishes.scss"

const TopDishes = () => {
    return ( 
        <>
        <div className="top">
            <h2>
            Our Top <span>Restaurants</span>
            </h2>
            <div className="top__dishes">
            <CardDish
            index="1"
            image="/src/assets/FoodImage.png"
            color="info orange"
            info="Healthy"
            title="Chicken Hell"
            time="24min •"
            rating="4.8"
            price="12"
            />
            <CardDish
            index="2"
            image="/src/assets/Food Image (1).png"
            color="info red"
            info="Trending"
            title="Swe Dish"
            time="34min •"
            rating="4.9"
            price="19"
            />
            <CardDish
            index="3"
            image="/src/assets/Food Image (2).png"
            color="info green"
            info="Supreme"
            title="Swe Dish"
            time="34min •"
            rating="4.9"
            price="19"
            />
            <CardDish
            index="1"
            image="/src/assets/FoodImage.png"
            color="info orange"
            info="Healthy"
            title="Chicken Hell"
            time="24min •"
            rating="4.8"
            price="12"
            />
            <CardDish
            index="2"
            image="/src/assets/Food Image (1).png"
            color="info red"
            info="Trending"
            title="Swe Dish"
            time="34min •"
            rating="4.9"
            price="19"
            />
            <Button variant="danger">
                    <Link to="">
                    View All  <img src={arrowr} alt="" />
                    </Link>
                </Button>
            </div>
        </div>
        </>
     );
}
 
export default TopDishes;