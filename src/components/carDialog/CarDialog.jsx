
import { createPortal } from "react-dom";
import { API_BASE_URL } from "../../config";
import "./CarDialog.css";

const CarDialog = ({ car, onClose }) => {
    const specifications = [
        { label: "Year", value: car.year },
        { label: "Make", value: car.make },
        { label: "Model", value: car.model },
        { label: "Trim", value: car.trim },
        { label: "Engine", value: car.engine },
        { label: "Drivetrain", value: car.drivetrain },
        { label: "Transmission", value: car.transmission },
        { label: "Weight", value: car.weight },
        { label: "Horsepower", value: car.horsepower },
        { label: "Torque", value: car.torque },
        { label: "0-60 MPH", value: car.zeroToSixty },
        { label: "Top Speed", value: car.topSpeed },
        { label: "Quarter Mile", value: car.quarterMile }
    ];

    return createPortal(
        <div
            id="car-dialog"
            className="w3-modal"
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
        >
            <div
                className="w3-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    id="dialog-close"
                    type="button"
                    onClick={onClose}
                >
                    &times;
                </button>

                <div id="car-dialog-content">
                    <h2>{car.name}</h2>
                    <p className="dialog-category">
                        {car.category}
                    </p>

                    <img
                        src={`${API_BASE_URL}${car.image}`}
                        alt={car.name}
                    />

                    <h3>Vehicle Specifications</h3>

                    <div className="car-specifications">
                        {specifications.map((spec) => (
                            <div
                                className="spec-row"
                                key={spec.label}
                            >
                                <span className="spec-label">
                                    {spec.label}
                                </span>

                                <span className="spec-value">
                                    {spec.value ?? "N/A"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default CarDialog;
