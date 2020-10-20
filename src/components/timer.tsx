import React, {useEffect, useState } from "react";

export const Timer =(props: any) => {
    const timeVal = 3000;

    const calculateTimeLeft = (timeVal: number) => {
        let timeLeft = {};
        if (timeVal > 0){
        timeLeft = {
            hours: Math.floor(timeVal / (1000 * 60 * 60) % 24),
            minutes: Math.floor((timeVal / (1000 * 60 * 60)) % 60),
            seconds: Math.floor((timeVal / 1000) % 60)
        };

        return timeLeft;
    }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timeVal));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(timeVal));
        }, 1000);
    
        return () => clearTimeout(timer);
    });

    return (
        <div>
            
        </div>
    )

}