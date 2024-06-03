import { createContext, useContext, useEffect, useState } from "react";

type darkModeContext = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext({} as darkModeContext);

type DarkModeProviderProps = {
  children: React.ReactNode;
};

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(function () {
    const themeValue = localStorage.getItem("theme");

    if (!themeValue) {
      localStorage.setItem("theme", "light");
      return false;
    } else return themeValue === "dark";
  });

  useEffect(
    function () {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");

      if (isDarkMode) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    },
    [isDarkMode],
  );

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("useDarkMode must be used within a DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
