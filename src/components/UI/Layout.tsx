import { useState, useEffect } from 'react';

function Layout({ children  } : any) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const className = darkMode ? 'dark' : 'light';
    document.documentElement.classList.add(className);
    return () => document.documentElement.classList.remove(className);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
     <div className={`bg-${darkMode ? 'dark.primary' : 'light.primary'} text-secondary`}>
      <nav className="bg-accent p-4">
        <button
          className="bg-white rounded-md px-4 py-2"
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light mode' : 'Dark mode'}
        </button>
      </nav>
      <main className="p-4">{children}</main>
      </div>
      </>
  );
}

export default Layout;
