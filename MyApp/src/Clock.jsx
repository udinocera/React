import { useEffect, useState } from "react"

export const Clock = () => {
const [time, setTime] = useState(currentTime());

function currentTime() {
    const time = new Date().toLocaleTimeString();
    return time;
}

useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(currentTime());
    }, 1000)

    return () => {
        clearInterval(intervalId);
    };
}, []);

return <h2>{time}</h2>
}