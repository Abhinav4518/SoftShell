import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={() => setDark(!dark)}
        className="bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded shadow hover:opacity-80 transition"
      >
        {dark ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
