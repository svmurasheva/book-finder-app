import "./RatingBar.css"


const RatingBar = ({ stars }) => {
    const starsArray = [];

    for (let i = 0; i < stars; i++) {
        if (stars - i < 1) {
            starsArray.push(<i key={i} className="fa-solid fa-star-half-stroke" style={{ color: "gold" }}></i>);
        } else {
            starsArray.push(<i key={i} className="fa-solid fa-star" style={{ color: "gold" }}></i>);
        }
    }

    return (
        <span className="rating-bar">
            {starsArray}
        </span>
    );
};

export default RatingBar;