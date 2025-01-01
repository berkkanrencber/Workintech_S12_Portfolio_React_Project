import { useGlobalContext } from "../context/GlobalContext";
import useTranslation from "../hooks/useTranslation";

const Profile = () => {
  const { data } = useGlobalContext();
  const t = useTranslation();
  const { profile } = data;

  return (
    <section className="pt-16 pb-6 px-8 bg-background-light dark:bg-background-dark">
      <div className="h-px w-full bg-primary-purple dark:bg-primary-light_purple"></div>
      
      <h2 className="text-3xl font-bold text-left my-6 text-primary-subtitle_gray dark:text-primary-title_gray_dark">
        {t.profile.title}
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="md:w-1/3">
          <h3 className="text-xl text-primary-purple dark:text-primary-light_purple mb-4">
            {t.profile.personalInfo}
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              <strong>{t.profile.dob}:</strong> {profile.dob}
            </li>
            <li>
              <strong>{t.profile.location}:</strong> {profile.location}
            </li>
            <li>
              <strong>{t.profile.educationStatus}:</strong> {profile.educationStatus}
            </li>
            <li>
              <strong>{t.profile.preferredRole}:</strong> {profile.preferredRole}
            </li>
          </ul>
        </div>
        
        <div className="md:w-1/3">
          <h3 className="text-xl text-primary-purple dark:text-primary-light_purple mb-2">
            {t.profile.aboutMe}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {profile.aboutMe}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
