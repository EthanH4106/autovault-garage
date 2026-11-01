import "./CarChart.css";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const CarChart = ({ myCar, opponent }) => {
    if (!myCar || !opponent) {
        return (
            <section id="car-chart">
                <h2>Performance Comparison</h2>
                <p>Select two cars to display the comparison chart.</p>
            </section>
        );
    }

    const data = [
        {
            stat: "Horsepower",
            myCar: myCar.horsepower,
            opponent: opponent.horsepower
        },
        {
            stat: "Torque",
            myCar: myCar.torque,
            opponent: opponent.torque
        }
    ];

    return (
        <section id="car-chart">
            <h2>Performance Comparison</h2>

            <p>
                {myCar.name} vs {opponent.name}
            </p>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#333333"
                        />

                        <XAxis dataKey="stat" stroke="#ffffff" />
                        <YAxis stroke="#ffffff" />

                        <Tooltip />
                        <Legend />

                        <Bar
                            dataKey="myCar"
                            name={myCar.name}
                            fill="#008fd3"
                        />

                        <Bar
                            dataKey="opponent"
                            name={opponent.name}
                            fill="#ff6b35"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default CarChart;