import { useGlobalContext } from "../context/GlobalContext";
import useTranslation from "../hooks/useTranslation";

const Hero = () => {
  const { data } = useGlobalContext();
  const { personal } = data;
  const t = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 py-16 bg-background-light dark:bg-background-dark text-gray-800 dark:text-white">
      
      <div className="md:w-1/2 text-center md:text-left">
        <div className="flex items-center md:justify-start justify-center gap-4 mb-4">
            <div className="h-px w-20 bg-primary-purple dark:bg-primary-light_purple md:block hidden"></div>
            <span className="text-primary-purple dark:text-primary-light_purple">{personal.name}</span>
        </div>
        <h1 className="text-primary-hero_title_dark dark:text-primary-hero_title_light text-4xl font-bold leading-tight mb-4">
          {personal.title} <br />
          {personal.subtitle}
        </h1>
        <p className="text-primary-text_gray dark:text-white text-base mb-6">{personal.about}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="px-6 py-2 bg-primary-purple dark:bg-primary-light_purple text-white dark:text-primary-hero_title_dark rounded-lg hover:bg-primary-purple hover:text-blue-100 dark:hover:text-white transition"
          >
            {t.hero.buttonHireMe}
          </a>
          <a
            href={personal.github}
            target="_blank"
            className="flex items-center gap-2 px-6 py-2 border border-primary-purple dark:border-primary-light_purple text-primary-purple dark:text-primary-light_purple rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.419-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.469-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.29-1.552 3.294-1.23 3.294-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.622-5.475 5.921.431.372.815 1.102.815 2.222 0 1.606-.014 2.896-.014 3.286 0 .322.19.694.8.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            {t.hero.buttonGithub}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            className="flex items-center gap-2 px-6 py-2 border border-primary-purple dark:border-primary-light_purple text-primary-purple dark:text-primary-light_purple rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.8 0 0 .774 0 1.725v20.55C0 23.226.8 24 1.77 24h20.46c.97 0 1.77-.774 1.77-1.725V1.725C24 .774 23.2 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zm-1.78-13.1c-1.14 0-2.06-.925-2.06-2.063 0-1.14.925-2.062 2.06-2.062 1.14 0 2.063.924 2.063 2.062 0 1.14-.924 2.063-2.062 2.063zM20.45 20.452h-3.56v-5.6c0-1.334-.03-3.046-1.856-3.046-1.858 0-2.144 1.448-2.144 2.946v5.7H9.33V9h3.42v1.56h.05c.474-.9 1.63-1.855 3.356-1.855 3.59 0 4.256 2.363 4.256 5.438v6.31z" />
            </svg>
            {t.hero.buttonLinkedIn}
          </a>
        </div>
      </div>

      
      <div className="md:w-5/12 mt-8 md:mt-0 flex justify-center">
        <img
          src={personal.image}
          alt="Profile"
          className="rounded-lg shadow-lg w-full max-w-[300px] h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
