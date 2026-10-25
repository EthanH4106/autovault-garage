import "./GarageFilter.css";

const categories = [
    "all",
    "suv",
    "truck",
    "muscle",
    "sport",
    "super"
];

const GarageFilter = ({ selectedFilter, onFilterChange }) => {
    return (
        <section id="garage-controls">
            <h3>Filter By:</h3>

            <div className="filter-links">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={
                            selectedFilter === category
                                ? "active"
                                : ""
                        }
                        onClick={() => onFilterChange(category)}
                        aria-pressed={selectedFilter === category}
                    >
                        {category === "all"
                            ? "All"
                            : category.charAt(0).toUpperCase() +
                              category.slice(1)}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default GarageFilter;