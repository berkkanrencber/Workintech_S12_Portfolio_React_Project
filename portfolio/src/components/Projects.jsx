import { useGlobalContext } from "../context/GlobalContext";
import useTranslation from "../hooks/useTranslation";

const Projects = () => {
  const { data } = useGlobalContext();
  const t = useTranslation();
  const { projects } = data;

  return (
    <section
      id="projects"
      className="py-4 px-8 bg-background-light dark:bg-background-dark"
    >
      <div className="h-px w-full bg-primary-purple dark:bg-primary-light_purple"></div>
      <h2 className="text-3xl font-bold text-left my-6 text-gray-800 dark:text-white">
        {t.projects.title}
      </h2>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-start  rounded-lg overflow-hidden"
          >
            
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="my-2">
              
              <h3 className="text-lg font-medium mt-2 text-primary-purple dark:text-primary-light_purple">
                {project.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white dark:bg-[#383838] border-primary-project_category_light border-[1px] rounded-lg text-xs text-primary-project_category_light dark:text-primary-project_category_dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-row justify-between gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-purple dark:text-primary-light_purple text-sm underline"
                >
                  {t.projects.github}
                </a>
                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-purple dark:text-primary-light_purple text-sm underline"
                  >
                    {t.projects.viewSite}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
