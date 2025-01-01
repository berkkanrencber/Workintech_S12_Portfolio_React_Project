import { useGlobalContext } from "../context/GlobalContext";
import useTranslation from "../hooks/useTranslation";

const Navbar = () => {
  const { theme, language, toggleTheme, toggleLanguage } = useGlobalContext();
  const t = useTranslation();

  return (
    <nav className="flex flex-col items-center bg-background-light dark:bg-background-dark sm:px-8 py-4 px-1">
      <div className="flex flex-col sm:flex-row sm:justify-end w-full sm:max-w-7xl justify-center items-center mb-4">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="relative inline-block w-11 h-5">
            <input
              id="theme-switch"
              type="checkbox"
              checked={theme === "light"}
              onChange={toggleTheme}
              className="peer appearance-none w-11 h-5 bg-[#3A3A3A] rounded-full checked:bg-primary-purple cursor-pointer transition-colors duration-300"
            />
            <label
              htmlFor="theme-switch"
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-none rounded-full flex items-center justify-center transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer ${
                theme === "dark"
                  ? "bg-transparent border-none peer-checked:bg-transparent"
                  : "bg-[#FFE86E] border-transparent peer-checked:bg-[#FFE86E]"
              }`}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="#FFE86E"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.05 13.9a8.1 8.1 0 01-9.95-9.95 9 9 0 109.95 9.95z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="#FFE86E"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="1" />
                </svg>
              )}
            </label>
          </div>
          <span className="text-[#777777] dark:text-[#D9D9D9] text-xs font-medium">
            {theme === "dark" ? t.navbar.lightMode : t.navbar.darkMode}
          </span>

          <div className="sm:w-px sm:h-5 w-10 h-px bg-gray-400 dark:bg-gray-600"></div>

          <div className="flex items-center">
            <button
              onClick={toggleLanguage}
              className="px-1 py-1 text-sm bg-transparent border-none outline-none focus:outline-none hover:outline-none text-primary-purple dark:text-primary-light_purple"
            >
              {language == "en" && (
                <>
                  {t.navbar.languageSwitch}
                  <span className="text-[#777777]">&apos;YE GEÇ</span>
                </>
              )}
              {language == "tr" && (
                <>
                  <span className="text-[#777777]">SWITCH TO </span>{" "}
                  {t.navbar.languageSwitch}
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-background-logo_light dark:bg-background-logo_dark flex items-center justify-center sm:mb-0 mb-5">
            <span className="dark:text-primary-light_purple text-primary-purple font-medium text-base transform rotate-45">
              B
            </span>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-8 gap-3 max-w-7xl">
          <a
            href="#skills"
            className="text-primary-gray hover:text-primary-purple dark:hover:text-primary-light_purple transition"
          >
            {t.navbar.skills}
          </a>
          <a
            href="#projects"
            className="text-primary-gray hover:text-primary-purple dark:hover:text-primary-light_purple transition"
          >
            {t.navbar.projects}
          </a>
          <a
            href="#footer"
            className="px-4 py-2 border border-primary-purple dark:bg-white hover:bg-primary-purple text-primary-purple dark:text-primary-purple rounded-md dark:hover:bg-primary-light_purple hover:text-white dark:hover:text-[#3730A3] transition"
          >
            {t.navbar.hireMe}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
