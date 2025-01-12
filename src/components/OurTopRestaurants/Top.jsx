import CardRest from "../CardsRest/CardRest";
import "./Top.scss";

const Top = () => {
  return (
    <div className="top">
      <h2>
        Our Top <span>Restaurants</span>
      </h2>

      <div className="top__cards">
        <CardRest
          index="1"
          image="/src/assets/thechicken.png"
          color="info orange"
          info="Healthy"
          title="The Chicken King"
          time="24min •"
          rating="4.8"
        />
        <CardRest
          index="2"
          image="/src/assets/theburger.png"
          color="info red"
          info="Trending"
          title="The Burger King"
          time="24min •"
          rating="4.9"
        />
        <CardRest
          index="3"
          image="/src/assets/thechicken.png"
          color="info orange"
          info="Healthy"
          title="The Chicken King"
          time="24min •"
          rating="4.8"
        />
      </div>
    </div>
  );
};

export default Top;
