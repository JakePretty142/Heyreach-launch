"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
  }, []);

  const choose = (t) => {
    document.documentElement.dataset.theme = t;
    setTheme(t);
    try {
      localStorage.setItem("warm-theme", t);
    } catch (e) {}
  };

  return (
    <div className="theme" role="group" aria-label="Colour theme">
      <button type="button" aria-label="Light mode" aria-pressed={theme === "light"} onClick={() => choose("light")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      </button>
      <button type="button" aria-label="Dark mode" aria-pressed={theme === "dark"} onClick={() => choose("dark")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
        </svg>
      </button>
    </div>
  );
}
