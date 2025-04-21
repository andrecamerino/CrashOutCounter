"use client";
import { useState, useEffect } from "react";
import ResetPopup from "./ResetPopup";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("bg-white");
  const [resetPopup, setResetPopup] = useState(false);

  useEffect(() => {
    playAlarm();
  }, [count]);

  useEffect(() => {
    const saved = localStorage.getItem("count");
    if (saved) setCount(parseInt(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const add1 = () => {
    setCount(count + 1);
  };

  const sub1 = () => {
    const current = count - 1;
    count > 0 ? setCount(current) : setCount(0);
  };

  const reset = () => {
    setCount(0);
  };

  const playAlarm = () => {
    if (count % 5 !== 0 || count === 0) return;
    const audio = new Audio("/alarm-sound.m4a");
    audio.play();
    flashBackground();
  };

  const flashBackground = () => {
    let i = 0;

    const interval = setInterval(() => {
      if (i >= 12) {
        clearInterval(interval);
      } else {
        setBgColor(i % 2 === 0 ? "bg-red-500" : "bg-white");
        i++;
      }
    }, 400);
  };

  const handleClose = () => {
    setResetPopup(false);
    reset();
  }

  return (
    <>
      {resetPopup ? <ResetPopup onClose={handleClose}/> : null}
      <div
        className={`grid md:grid-rows-[1fr_1.5fr] grid-rows-[auto_auto] p-6 md:p-30 text-center place-items-center text-2xl gap-10 md:gap-0 md:text-4xl ${bgColor}`}
      >
        <h1 className="text-9xl py-10 md:py-0 md:text-[256px]">{count}</h1>

        <div className="border-4 rounded-3xl border-black flex flex-col md:flex-row gap-2 md:gap-10 p-2 md:p-6 bg-white w-full md:w-auto justify-center items-center">
          <button
            onClick={add1}
            className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-10 md:px-20 py-6 md:py-10 rounded-2xl transition w-full md:w-auto"
          >
            + 1
          </button>

          <button
            onClick={() => setResetPopup(true)}
            className="bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 px-6 md:px-10 py-4 md:py-5 rounded-2xl transition w-full md:w-auto"
          >
            Reset
          </button>

          <button
            onClick={sub1}
            className="bg-green-400 hover:bg-green-500 active:bg-green-600 px-10 md:px-20 py-6 md:py-10 rounded-2xl transition w-full md:w-auto"
          >
            - 1
          </button>
        </div>
      </div>
    </>
  );
}
