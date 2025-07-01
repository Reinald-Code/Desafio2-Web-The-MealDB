// src/components/SearchForm.jsx
import React, { useState } from 'react';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    setResults(data.meals || []);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar una receta..."
          className="border p-2 rounded-md flex-grow"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Buscar
        </button>
      </form>

      {/* Aquí se muestran los resultados */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {results.map((meal) => (
          <div key={meal.idMeal} className="border rounded-lg p-4">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-md" />
            <h3 className="font-bold mt-2">{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}