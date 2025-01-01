import { useGlobalContext } from "../context/GlobalContext";
import useTranslation from "../hooks/useTranslation";

const Skills = () => {
  const { data } = useGlobalContext();
  const t = useTranslation();
  const { skills } = data;

  return (
    <section id="skills" className="pt-12 pb-6 px-8 bg-background-light dark:bg-background-dark">
      
      <h2 className="text-3xl font-bold text-left mb-4 text-primary-subtitle_gray dark:text-primary-title_gray_dark">
        {t.skills.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="text-left">
            <h3 className="text-xl font-normal text-primary-purple dark:text-primary-light_purple mb-2">
              {skill.name}
            </h3>
            <p className="text-sm text-primary-text_gray dark:text-white">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
