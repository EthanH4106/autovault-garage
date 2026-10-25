import "./Performance.css"
import CarStats from "../../components/carStats/CarStats";
import CarComparison from "../../components/carComparison/CarComparison";

const Performance = () => {
    return (
        <main id="performance-page">
            {/* Performance Introduction */}
            <section id="performance-intro">
                <h2>Performance Lab</h2>
                <p>
                    Explore the numbers behind the world's cars!
                </p>
                <p>
                    Select two vehicles from the garage
                    to compare their performance.
                </p>
            </section>

            {/* Vehicle Statistics */}
            <div className="performance-grid">
                <CarStats title="Your Car" />
                <CarStats title="Opponent's Car" />
            </div>

            {/* Head-to-Head Comparison */}
            <CarComparison />

            {/* Winner Section */}
            <section id="winner">
                <h2>Winner</h2>
                <p>To Be Determined</p>
            </section>
        </main>
    );
};

export default Performance;