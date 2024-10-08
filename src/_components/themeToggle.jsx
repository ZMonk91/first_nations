"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const storedTheme = window.localStorage.getItem("preferred-theme");

  const toggleTheme = () => {
    if (storedTheme === "emerald") {
      window.localStorage.setItem("preferred-theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      window.localStorage.setItem("preferred-theme", "emerald");
      document.documentElement.setAttribute("data-theme", "emerald");
    }
  };

  const [isdark, setIsdark] = useState(
    window.localStorage.getItem("preferred-theme") === "dark"
  );

  useEffect(() => {
    window.localStorage.setItem("preferred-theme", isdark ? "dark" : "emerald");
    document.documentElement.setAttribute(
      "data-theme",
      isdark ? "dark" : "emerald"
    );
  }, [isdark]);

  return (
    <label className="flex cursor-pointer gap-2 justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        checked={isdark}
        value="synthwave"
        className="toggle theme-controller"
        onChange={() => setIsdark(!isdark)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
}
