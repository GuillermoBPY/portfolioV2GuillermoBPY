import { useState, useEffect } from "react";
import "./DarkMode.css";

function DarkMode() {
  const [IsLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsLightMode(true);
      document.body.classList.add("darkMode");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsLightMode(!IsLightMode);
    localStorage.setItem("darkMode", !IsLightMode);
    document.body.classList.toggle("darkMode");
  };

  return (
    <button
      className="darkmodebtn"
      onClick={toggleDarkMode}
    >
      {IsLightMode ? (
        <i key={"bx-moon"} className="bx bx-moon"></i>
      ) : (
        <i key={"bx-sun"} className="bx bx-sun"></i>
      )}
    </button>
  );
}

export default DarkMode;
