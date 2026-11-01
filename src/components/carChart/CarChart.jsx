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

const CarChart = () => {
    const data = [
        {
            stat: "Horsepower",
            mustang: 760,
            supra: 382
        },
        {
            stat: "Torque",
            mustang: 625,
            supra: 368
        }
    ];

    return (
        <section id="car-chart">
            <h2>Performance Comparison</h2>
            <p>
                Compare the horsepower and torque
                of these two performance cars.
            </p>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={data}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#333333"
                        />

                        <XAxis
                            dataKey="stat"
                            stroke="#ffffff"
                        />

                        <YAxis stroke="#ffffff" />

                        <Tooltip />

                        <Legend />

                        <Bar
                            dataKey="mustang"
                            name="Mustang GT500"
                            fill="#008fd3"
                        />

                        <Bar
                            dataKey="supra"
                            name="Toyota Supra"
                            fill="#ff6b35"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default CarChart;