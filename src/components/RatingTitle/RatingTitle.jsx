import "./RatingTitle.scss";
const RatingTitle = () => {
  return (
    <div className="rating">
      <div className="rating-assets">
        <div className="rating__costumers">
          <h3>10K+</h3>
          <p>
            Satisfied Costumers <br />
            All Great Over The World{" "}
          </p>
        </div>
        <div className="rating__stick"></div>
        <div className="rating__dishes">
          <h3>4M</h3>
          <p>
            Healthy Dishes Sold <br />
            Including Milk Shakes Smooth{" "}
          </p>
        </div>
        <div className="rating__stick"></div>
        <div className="rating__reliable">
          <h3>99.99%</h3>
          <p>
            Reliable Customer Support <br />
            We Provide Great Experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingTitle;
