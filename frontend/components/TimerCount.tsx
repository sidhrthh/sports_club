"use client"

import React, { useState, useEffect } from 'react';

const TimerCount = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 24 * 60 * 60); // 3 days in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds:number) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hrs = Math.floor((seconds % (24 * 3600)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days.toString().padStart(2, '0')}d ${hrs.toString().padStart(2, '0')}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
  };

  return (
   <p>{formatTime(timeLeft)}</p>
  );
};

export default TimerCount;
