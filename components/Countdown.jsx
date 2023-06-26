import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from './Provider'

const Countdown = ({ key = 1, timer = 20, animate = true, children }) => {
    const { stopTimer } = useContext(SettingContext);
    const totalTime = timer * 60;
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={totalTime}
            onComplete={() => {
                stopTimer();
                alert(`${totalTime}`);
            }
            }
            colors={["#c2410c", "#ea580c", "#f97316", "#fb923c"]}
            colorsTime={[totalTime, (totalTime * 2) / 3, totalTime / 3, 0]}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default Countdown