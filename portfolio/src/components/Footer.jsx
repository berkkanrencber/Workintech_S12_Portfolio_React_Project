import { useGlobalContext } from "../context/GlobalContext";
import useTranslation from "../hooks/useTranslation";

const Footer = () => {
  const { data } = useGlobalContext();
  const t = useTranslation();
  const { personal } = data;

  return (
    <footer id="footer" className="py-16 sm:px-32 px-12 bg-[#f9f9f9] dark:bg-[#141414]">
      <div className="flex flex-col">
        
        <div className="md:text-left text-center md:w-1/3 w-full">
          <h2 className="text-2xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-4">
            {t.footer.contactText}
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md: justify-between gap-6 mt-8 md:mt-0">
          <div>
            <a
              href={`mailto:${personal.email}`}
              className="text-lg text-[#AF0C48] dark:text-primary-light_purple hover:underline flex items-center gap-2"
            >
              👉 {personal.email}
            </a>
          </div>
          <div className="flex flex-row gap-6">
            <a
              href="#"
              className="text-[#0A0A14] dark:text-[#AEBCCF] hover:text-primary-purple dark:hover:text-primary-light_purple "
            >
              {t.footer.blog}
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00AB6B] hover:text-primary-purple dark:hover:text-primary-light_purple"
            >
              {t.projects.github}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:text-primary-purple dark:hover:text-primary-light_purple"
            >
              {t.hero.buttonLinkedIn}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
