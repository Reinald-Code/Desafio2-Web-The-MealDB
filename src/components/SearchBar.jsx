// src/components/SearchBar.jsx
import React, { useState } from 'react';

export default function SearchBar() {
  // 'useState' crea una "variable de estado" para guardar lo que el usuario escribe.
  const [query, setQuery] = useState('');

  // Esta función se ejecuta cuando el usuario envía el formulario (presiona Enter o el botón)
  const handleSearch = (e) => {
    e.preventDefault(); // Evita que la página se recargue, que es el comportamiento por defecto de un formulario.
    
    // Solo redirigimos si el usuario ha escrito algo (ignoramos espacios en blanco)
    if (query.trim()) {
      // Redirigimos al usuario a la página de búsqueda, pasando la consulta en la URL.
      // Por ejemplo: si busca "chicken", la URL será "/search?q=chicken"
      window.location.href = `/search?q=${query}`;
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Actualiza el estado 'query' cada vez que el usuario teclea.
        placeholder="Buscar receta..."
        className="border border-gray-300 rounded-l-md px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
      >
        Buscar
      </button>
    </form>
  );
}