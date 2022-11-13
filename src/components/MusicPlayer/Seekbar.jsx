import React from 'react';

const Seekbar = ({ value, min, max, onInput, open }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className={`${open ? 'flex drop-shadow-xl' : 'hidden'} sm:flex flex-row items-center relative`}>
      <p className="text-gray-300 absolute top-2 left-4 drop-shadow-md">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className={`${open ? 'w-[300px]' : 'min-w-[180px]'} md:block  md:w-[320px] lg:w-[400px] xl:w-[600px] h-1 mx-4 2xl:mx-6 rounded-lg accent-indigo-500 drop-shadow-xl cursor-pointer`}
      />
      <p className="text-gray-300 absolute top-2 right-4 drop-shadow-md">{max === 0 ? '0:00' : getTime(max)}</p>
    </div>
  );
};

export default Seekbar;
