
import "./CardRest.scss";

import stars from "../../assets/star2.svg";
import bookmark from "../../assets/Bookmark.svg";

const CardRest = (card) => {
  return (
    <div key={card.index} className="top__card">
      <div className="top__card-img">
        <img src={card.image} alt="" />
      </div>
      <div className="top__card-content">
        <p className={card.color}>{card.info}</p>
        <h4>{card.title}</h4>
        <div className="top__card-bottom">
          <div className="top__card-item">
            <p>{card.time}</p>
            <img src={stars} alt=""></img>
            <p> {card.rating}</p>
          </div>
          <button>
            <img src={bookmark} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRest;
