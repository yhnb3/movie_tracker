import React from 'react';

export default function rateCircle({ rate, color, times }) {
  const dashArray = `${(rate * Math.PI * 2 * 17 * times) / 10} ${
    Math.PI * 2 * 17 * times - (rate * Math.PI * 2 * 17 * times) / 10
  }`;
  const dashOffset = (Math.PI * 2 * 17 * times) / 4;

  return rate > 0 ? (
    <svg
      version="1.1"
      baseProfile="full"
      width={40 * times}
      height={40 * times}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={20 * times} cy={20 * times} r={20 * times} fill="black" />
      <circle
        cx={20 * times}
        cy={20 * times}
        r={17 * times}
        strokeWidth={3 * times}
        stroke={color}
        strokeOpacity="0.3"
      />
      <circle
        cx={20 * times}
        cy={20 * times}
        r={17 * times}
        fill="none"
        stroke={color}
        strokeWidth={3 * times}
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      />
      <text
        x={8 * times}
        y={26 * times}
        fill="white"
        fontSize={17 * times}
        fontFamily="'맑은 고딕', cursive"
      >
        {rate * 10}
      </text>
      <text
        x={27 * times}
        y={18 * times}
        fill="white"
        fontSize={5 * times}
        fontFamily="'맑은 고딕', cursive"
      >
        %
      </text>
    </svg>
  ) : (
    <svg
      version="1.1"
      baseProfile="full"
      width="40"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={20 * times} cy={20 * times} r={20 * times} fill="black" />
      <circle
        cx={20 * times}
        cy={20 * times}
        r={17 * times}
        strokeWidth={3 * times}
        stroke="grey"
        strokeOpacity="0.3"
      />
      <text
        x={8 * times}
        y={26 * times}
        fill="white"
        fontSize={17 * times}
        fontFamily="'맑은 고딕', cursive"
      >
        NR
      </text>
    </svg>
  );
}
