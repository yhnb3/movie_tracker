import React from 'react';

export default function rateCircle({ rate, color }) {
  const dashArray = `${(rate * Math.PI * 2 * 17) / 10} ${
    Math.PI * 2 * 17 - (rate * Math.PI * 2 * 17) / 10
  }`;
  const dashOffset = (Math.PI * 2 * 17) / 4;

  return (
    <svg
      version="1.1"
      baseProfile="full"
      width="40"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="black" />
      <circle
        cx="20"
        cy="20"
        r="17"
        strokeWidth="3"
        stroke={color}
        strokeOpacity="0.3"
      />
      <circle
        cx="20"
        cy="20"
        r="17"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      />
      <text
        x="8"
        y="26"
        fill="white"
        fontSize="17"
        fontFamily="'맑은 고딕', cursive"
      >
        {rate * 10}
      </text>
      <text
        x="27"
        y="18"
        fill="white"
        fontSize="5"
        fontFamily="'맑은 고딕', cursive"
      >
        %
      </text>
    </svg>
  );
}
