/* eslint-disable react/prop-types */

const AppWrapper = ({ children }) => {
  return <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark w-full  mx-auto sm:px-24 px-4">{children}</div>;
};

export default AppWrapper;
