import React from 'react';

export default function PlayMe(props) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_303_2695)">
        <ellipse
          cx="29.9826"
          cy="30"
          rx="29.9826"
          ry="30"
          fill="#043D3B"
          fillOpacity="0.6"
        />
      </g>
      <path
        d="M39.7867 27.8649C41.7852 29.0194 41.7852 31.9043 39.7867 33.0588L26.6405 40.6532C24.6411 41.8082 22.1411 40.3653 22.1411 38.0562L22.1411 22.8675C22.1411 20.5584 24.6411 19.1155 26.6405 20.2705L39.7867 27.8649Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_303_2695"
          x="-2.99913"
          y="-2.99913"
          width="65.9633"
          height="65.9983"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.49956" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_303_2695"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_303_2695"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
