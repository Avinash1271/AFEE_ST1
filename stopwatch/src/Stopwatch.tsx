import React, { useState, useRef } from "react";

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<number | undefined>(undefined);

  const handleStartStop = (): void => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = window.setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = (): void => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setLaps([]);
    setTime(0);
  };

  const handleLap = (): void => {
    setLaps([...laps, time]);
  };

  return (
    <div className="stopwatch">
      <h1>{formatTime(time)}</h1>
      <div className="controls">
        <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap}>Lap</button>
      </div>
      <div className="laps">
        <h2>Laps:</h2>
        {laps.map((lap, index) => (
          <p key={index}>{formatTime(lap)}</p>
        ))}
      </div>
    </div>
  );
};

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor((time % 1000) / 10);
  return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
};

const padTime = (value: number): string => {
  return value.toString().padStart(2, "0");
};

export default Stopwatch;
