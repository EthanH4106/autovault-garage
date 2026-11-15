
import { useState } from "react";
import "./GarageCard.css";
import { API_BASE_URL } from "../../config";
import CarDialog from "../carDialog/CarDialog";

const GarageCard = ({
    car,
    onSelectMyCar,
    onSelectOpponent
}) => {
    const [showDialog, setShowDialog] = useState(false);
    const [imageError, setImageError] = useState(false);

    const showDetails = () => {
        setShowDialog(true);
    };

    const hideDetails = () => {
        setShowDialog(false);
    };

    // Handle uploaded images and existing vehicle images
    const getImageUrl = () => {
        if (!car.image) {
            return null;
        }

        // Already a complete URL
        if (
            car.image.startsWith("http://") ||
            car.image.startsWith("https://")
        ) {
            return car.image;
        }

        // Image stored on the backend
        return `${API_BASE_URL}/${car.image.replace(/^\/+/, "")}`;
    };

    const imageUrl = getImageUrl();

    return (
        <article
            className="garage-card"
            onClick={showDetails}
        >
            {showDialog && (
                <CarDialog
                    car={car}
                    onClose={hideDetails}
                />
            )}

            {imageUrl && !imageError ? (
                <img
                    src={imageUrl}
                    alt={car.name}
                    onError={() => setImageError(true)}
                />
            ) : (
                <div className="garage-card-no-image">
                    <span>🚘</span>
                    <p>Image Unavailable</p>
                </div>
            )}

            <div className="garage-card-info">
                <h3>{car.name}</h3>
                <p>{car.category}</p>

                <div className="garage-card-buttons">
                    <button
                        type="button"
                        className="select-my-car"
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelectMyCar();
                        }}
                    >
                        Select My Car
                    </button>

                    <button
                        type="button"
                        className="select-opponent"
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelectOpponent();
                        }}
                    >
                        Select Opponent
                    </button>
                </div>
            </div>
        </article>
    );
};

export default GarageCard;
