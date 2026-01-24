"use client";

import React from "react";

export default function BlogBackButton() {
  return (
    <div>
      {" "}
      <a
        href="#"
        onClick={function (e) {
          e.preventDefault();
          window.history.back();
          return false;
        }}
        className="flex items-center font-inter"
      >
        <svg
          width="14"
          height="21"
          viewBox="0 0 14 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99988 10.5001L14 17.1667L10.4998 20.5L0 10.5001L10.4998 0.5L14 3.83335L6.99988 10.5001Z"
            fill="#20272D"
          ></path>
        </svg>

        <span className="hidden ml-[15px] font-semibold md:block text-pharmacy-700 text-[2rem] leading-[26.57px] -tracking-[-0.42px]">
          Blog
        </span>
      </a>
    </div>
  );
}
