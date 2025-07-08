import { useState, useEffect } from 'react';

// Componente React para alternar entre modo claro y oscuro
const ThemeToggle = () => {
  // Estado para controlar si el modo oscuro está activo
  const [isDark, setIsDark] = useState(false);

  // useEffect que se ejecuta al montar el componente
  useEffect(() => {
    // Verificamos si hay una preferencia guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Si hay una preferencia guardada, la usamos
    if (savedTheme) {
      const isDarkMode = savedTheme === 'dark';
      setIsDark(isDarkMode);
      updateTheme(isDarkMode);
    } else {
      // Si no hay preferencia guardada, verificamos la preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      updateTheme(prefersDark);
    }
  }, []);

  // Función que actualiza el tema en el documento HTML
  const updateTheme = (darkMode: boolean) => {
    const html = document.documentElement;
    
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  // Función que maneja el cambio de tema
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Guardamos la preferencia en localStorage
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    
    // Aplicamos el tema al documento
    updateTheme(newIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2 rounded-lg 
        bg-gray-200 hover:bg-gray-300 
        dark:bg-gray-700 dark:hover:bg-gray-600
        text-gray-800 dark:text-gray-200
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-orange-500
      "
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {/* Iconos usando emojis para simplicidad */}
      {isDark ? (
        // Icono de sol para modo claro
        <span className="text-xl">☀️</span>
      ) : (
        // Icono de luna para modo oscuro
        <span className="text-xl">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;
