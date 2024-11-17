import "../index.scss";
import React from "react";

const CounterSection = () => {
  const classNameButton =
    "px-4 py-2 rounded-lg bg-[#00d8ff] font-medium text-black tracking-wider";

  const [count, setCount] = React.useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const ReactIcon = () => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="-10.5 -9.45 21 18.9"
        fill="#00d8ff"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-4 mb-3 text-[#00d8ff] w-24 self-center text-sm me-0 flex origin-center transition-all ease-in-out animate-spin-slow"
      >
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    );
  };

  return (
    <section className="max-w-[600px] mx-auto border-4 border-[#00d8ff] p-6 rounded-2xl flex flex-col items-center space-y-5">
      <ReactIcon />
      <h1 className="text-3xl font-semibold">React Counter Component</h1>
      <p className="text-4xl font-bold">{count}</p>
      <div className="space-x-4">
        <button onClick={increment} className={classNameButton}>
          Increment
        </button>
        <button onClick={decrement} className={classNameButton}>
          Decrement
        </button>
      </div>
    </section>
  );
};

export default CounterSection;
