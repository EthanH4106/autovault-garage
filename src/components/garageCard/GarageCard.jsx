import "./GarageCard.css";

const GarageCard = ({ name, category, image, onSelectMyCar, onSelectOpponent }) => {
    return (
        <article className="garage-card">
            <img src={image} alt={name} />

            <div className="garage-card-info">
                <h3>{name}</h3>
                <p>{category}</p>

                <div className="garage-card-buttons">
                    <button
                        type="button"
                        className="select-my-car"
                        onClick={onSelectMyCar}
                    >
                        Select My Car
                    </button>

                    <button
                        type="button"
                        className="select-opponent"
                        onClick={onSelectOpponent}
                    >
                        Select Opponent
                    </button>
                </div>
            </div>
        </article>
    );
};

export default GarageCard;