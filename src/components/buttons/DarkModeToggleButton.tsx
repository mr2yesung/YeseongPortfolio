import { useDarkMode } from "../../hooks/DarkModeContext";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

type DarkModeToggleButtonProps = {
  darkClassName?: string;
  lightClassName?: string;
};

function DarkModeToggleButton({
  darkClassName = "",
  lightClassName = "",
}: DarkModeToggleButtonProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <span
      onClick={toggleDarkMode}
      className={`w-[40px] h-[40px] rounded-full hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ${isDarkMode ? darkClassName : `bg-white text-black hover:text-white ${lightClassName}`}`}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </span>
  );
}

export default DarkModeToggleButton;
