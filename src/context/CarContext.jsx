import { createContext, useContext, useState } from "react";

const CarContext = createContext(null);

export const CarProvider = ({ children }) => {
    const [myCar, setMyCar] = useState(null);
    const [opponent, setOpponent] = useState(null);

    return (
        <CarContext.Provider
            value={{
                myCar,
                setMyCar,
                opponent,
                setOpponent
            }}
        >
            {children}
        </CarContext.Provider>
    );
};

export const useCars = () => {
    const context = useContext(CarContext);

    if (!context) {
        throw new Error("useCars must be used inside CarProvider");
    }

    return context;
};