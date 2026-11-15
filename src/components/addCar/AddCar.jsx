
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import "./AddCar.css";

const initialFormData = {
    name: "",
    year: "",
    make: "",
    model: "",
    trim: "",
    category: "sport",
    engine: "",
    drivetrain: "",
    transmission: "",
    weight: "",
    horsepower: "",
    torque: "",
    zeroToSixty: "",
    topSpeed: "",
    quarterMile: ""
};

const numericFields = [
    "year", "weight", "horsepower", "torque",
    "zeroToSixty", "topSpeed", "quarterMile"
];

const performanceFields = [
    ["engine", "Engine", "3.0L Turbo I6"],
    ["transmission", "Transmission", "8-Speed Automatic"],
    ["weight", "Weight (lbs)", "3400"],
    ["horsepower", "Horsepower (hp)", "382"],
    ["torque", "Torque (lb-ft)", "368"],
    ["zeroToSixty", "0-60 MPH (seconds)", "3.9"],
    ["topSpeed", "Top Speed (mph)", "155"],
    ["quarterMile", "Quarter Mile (seconds)", "12.3"]
];

const AddCar = ({ close_dialog, onCarAdded }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [prevSrc, setPrevSrc] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError("");
    };

    const uploadImage = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp"
        ];

        if (!allowedTypes.includes(file.type)) {
            setError("Please select a JPG, PNG, or WebP image.");
            e.target.value = "";
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError("Image must be smaller than 5 MB.");
            e.target.value = "";
            return;
        }

        setImageFile(file);
        setError("");
    };

    useEffect(() => {
        if (!imageFile) {
            setPrevSrc("");
            return;
        }

        const url = URL.createObjectURL(imageFile);
        setPrevSrc(url);

        return () => URL.revokeObjectURL(url);
    }, [imageFile]);

    const validateForm = () => {
        if (formData.name.length < 3 ||
            formData.name.length > 100) {
            return "Vehicle name must be 3-100 characters.";
        }

        if (formData.make.length < 2 ||
            formData.model.length < 1 ||
            formData.engine.length < 2 ||
            formData.transmission.length < 2) {
            return "Please complete all required vehicle details.";
        }

        if (!["suv", "truck", "muscle", "sport", "super"]
            .includes(formData.category)) {
            return "Please select a valid category.";
        }

        if (!["FWD", "RWD", "AWD", "4WD"]
            .includes(formData.drivetrain)) {
            return "Please select a valid drivetrain.";
        }

        const year = Number(formData.year);
        if (formData.year === "" ||
            !Number.isInteger(year) ||
            year < 1900 || year > 2100) {
            return "Year must be between 1900 and 2100.";
        }

        for (const field of numericFields) {
            if (field === "year") continue;

            const raw = formData[field];
            const value = Number(raw);

            if (raw === "" || !Number.isFinite(value)) {
                return `Please enter a valid number for ${field}.`;
            }

            if (field === "torque" ? value < 0 : value <= 0) {
                return `${field} has an invalid value.`;
            }
        }

        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setSubmitting(true);

        try {
            const data = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            });

            if (imageFile) {
                data.append("img", imageFile);
            }

            const response = await axios.post(
                `${API_BASE_URL}/api/cars`,
                data
            );

            if (response.data.success) {
                setSuccess("Vehicle successfully added to AutoVault!");
                onCarAdded?.(response.data.car);
                setFormData({ ...initialFormData });
                setImageFile(null);
            } else {
                setError("Unable to add vehicle.");
            }
        } catch (err) {
            console.error("Error adding car:", err);

            const serverErrors = err.response?.data?.errors;
            setError(
                Array.isArray(serverErrors)
                    ? serverErrors.join(" ")
                    : err.response?.data?.message ||
                      "Unable to add vehicle. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    };

    return createPortal(
        <div id="add-car-dialog" onClick={close_dialog}>
            <div
                className="add-car-content"
                role="dialog"
                aria-modal="true"
                aria-labelledby="add-car-title"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="add-car-close"
                    onClick={close_dialog}
                    aria-label="Close dialog"
                >
                    &times;
                </button>

                <div className="add-car-header">
                    <h2 id="add-car-title">Add New Vehicle</h2>
                    <p>Expand your AutoVault collection</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <h3>Vehicle Information</h3>

                    <div className="add-car-grid">
                        {[
                            ["name", "Vehicle Name", "2024 Toyota GR Supra"],
                            ["make", "Make", "Toyota"],
                            ["model", "Model", "GR Supra"],
                            ["trim", "Trim", "3.0 Premium"]
                        ].map(([name, label, placeholder]) => (
                            <div className="add-car-field" key={name}>
                                <label htmlFor={name}>{label}</label>
                                <input
                                    id={name}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                    required={name !== "trim"}
                                    minLength={
                                        name === "name" ? 3 :
                                        name === "make" ? 2 : undefined
                                    }
                                    maxLength={
                                        name === "name" ? 100 : undefined
                                    }
                                />
                            </div>
                        ))}

                        <div className="add-car-field">
                            <label htmlFor="year">Year</label>
                            <input
                                id="year"
                                name="year"
                                type="number"
                                min="1900"
                                max="2100"
                                step="1"
                                value={formData.year}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="add-car-field">
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="suv">SUV</option>
                                <option value="truck">Truck</option>
                                <option value="muscle">Muscle</option>
                                <option value="sport">Sport</option>
                                <option value="super">Super</option>
                            </select>
                        </div>
                    </div>

                    <h3>Performance Specifications</h3>

                    <div className="add-car-grid">
                        <div className="add-car-field">
                            <label htmlFor="drivetrain">Drivetrain</label>
                            <select
                                id="drivetrain"
                                name="drivetrain"
                                value={formData.drivetrain}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Drivetrain</option>
                                <option value="FWD">FWD</option>
                                <option value="RWD">RWD</option>
                                <option value="AWD">AWD</option>
                                <option value="4WD">4WD</option>
                            </select>
                        </div>

                        {performanceFields.map(
                            ([name, label, placeholder]) => {
                                const isNumber =
                                    numericFields.includes(name);

                                return (
                                    <div className="add-car-field" key={name}>
                                        <label htmlFor={name}>{label}</label>
                                        <input
                                            id={name}
                                            name={name}
                                            type={isNumber ? "number" : "text"}
                                            value={formData[name]}
                                            onChange={handleChange}
                                            placeholder={placeholder}
                                            min={
                                                isNumber
                                                    ? name === "torque"
                                                        ? "0"
                                                        : "0.000001"
                                                    : undefined
                                            }
                                            step={isNumber ? "any" : undefined}
                                            minLength={
                                                isNumber ? undefined : 2
                                            }
                                            required
                                        />
                                    </div>
                                );
                            }
                        )}
                    </div>

                    <h3>Vehicle Image</h3>

                    <div className="add-car-upload">
                        {prevSrc ? (
                            <img src={prevSrc} alt="Vehicle preview" />
                        ) : (
                            <p>No image selected</p>
                        )}

                        <input
                            type="file"
                            id="img"
                            name="img"
                            accept=".jpg,.jpeg,.png,.webp"
                            onChange={uploadImage}
                        />
                        <p>JPG, PNG, or WebP — maximum 5 MB</p>
                    </div>

                    {error && (
                        <p className="add-car-error" role="alert">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="add-car-success" role="status">
                            {success}
                        </p>
                    )}

                    <div className="add-car-actions">
                        <button
                            type="button"
                            className="add-car-cancel"
                            onClick={close_dialog}
                            disabled={submitting}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="add-car-submit"
                            disabled={submitting}
                        >
                            {submitting
                                ? "Adding Vehicle..."
                                : "Add Vehicle"}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default AddCar;
