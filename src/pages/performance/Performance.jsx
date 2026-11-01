import "./Performance.css";

import CarStats from "../../components/carStats/CarStats";
import CarComparison from "../../components/carComparison/CarComparison";
import CarChart from "../../components/carChart/CarChart";
import { useCars } from "../../context/CarContext";

const Performance = () => {
    const { myCar, opponent } = useCars();

    const getWinner = () => {
        if (!myCar || !opponent) {
            return "Select two cars to predict a winner!";
        }

        if (myCar.quarterMile < opponent.quarterMile) {
            return `${myCar.name} Wins!`;
        }

        if (opponent.quarterMile < myCar.quarterMile) {
            return `${opponent.name} Wins!`;
        }

        return "It's a Tie!";
    };

    return (
        <main id="performance-page">

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

            <div className="performance-grid">
                <CarStats
                    title="Your Car"
                    car={myCar}
                    opponent={opponent}
                />

                <CarStats
                    title="Opponent's Car"
                    car={opponent}
                    opponent={myCar}
                />
            </div>

            <CarComparison
                myCar={myCar}
                opponent={opponent}
            />

            {/* Recharts Integration */}
            <CarChart
                myCar={myCar}
                opponent={opponent}
            />

            <section id="winner">
                <h2>Predicted Quarter-Mile Winner</h2>
                <p>{getWinner()}</p>
            </section>
        </main>
    );
};

export default Performance;