import React from 'react';

export default function IconCancel(props) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={24}
    //   height={25}
    //   fill="none"
    //   {...props}
    // >
    //   <circle
    //     cx={12}
    //     cy={12.25}
    //     r={10.875}
    //     stroke="currentColor"
    //     strokeWidth={2.25}
    //   />
    //   <g
    //     stroke="currentColor"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={2.25}
    //     clipPath="url(#a)"
    //   >
    //     <path d="M6.001 12.25h12M12.001 6.25v12" />
    //   </g>
    //   <defs>
    //     <clipPath id="a">
    //       <path fill="#fff" d="M4.8 5.05h14.4v14.4H4.8z" />
    //     </clipPath>
    //   </defs>
    // </svg>

    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="3" />
      <g clipPath="url(#clip0_172_5480)">
        <path
          d="M8.00098 15.9996H24.001"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.001 7.99963V23.9996"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_172_5480">
          <rect
            width="19.2"
            height="19.2"
            fill="white"
            transform="translate(6.40137 6.39966)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
