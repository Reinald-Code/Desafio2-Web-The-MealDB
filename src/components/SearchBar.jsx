// src/components/SearchBar.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const debounceTimer = useRef(null);
  const searchRef = useRef(null);

  // Función para hacer búsqueda en la API
  const searchMeals = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setResults(data.meals || []);
      setShowResults(true);
    } catch (error) {
      console.error('Error al buscar recetas:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Efecto para búsqueda con debounce
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (isTyping && query.trim()) {
      debounceTimer.current = setTimeout(() => {
        searchMeals(query);
        setIsTyping(false);
      }, 300); // Espera 300ms después de que el usuario deje de escribir
    } else if (!query.trim()) {
      setResults([]);
      setShowResults(false);
    }

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [query, isTyping]);

  // Cerrar resultados cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Función para resaltar términos de búsqueda
  const highlightMatch = (text, query) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (part.toLowerCase() === query.toLowerCase()) {
        return <mark key={index} className="bg-yellow-200 text-gray-900">{part}</mark>;
      }
      return part;
    });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsTyping(true);
    setSelectedIndex(-1); // Reset selected index when typing
  };

  const handleKeyDown = (e) => {
    if (!showResults || results.length === 0) {
      if (e.key === 'Enter') {
        handleSearch(e);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleResultClick(results[selectedIndex].idMeal);
        } else {
          handleSearch(e);
        }
        break;
      case 'Escape':
        setShowResults(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      setShowResults(false);
      window.location.href = `/search?q=${encodeURIComponent(trimmedQuery)}`;
    }
  };

  const handleResultClick = (mealId) => {
    setShowResults(false);
    window.location.href = `/meal/${mealId}`;
  };

  return (
    <div ref={searchRef} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => query.trim() && setShowResults(true)}
        placeholder="Buscar recetas..."
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0e0e] focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] focus:border-none h-full placeholder:text-[#994d51] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
      />
      
      {/* Dropdown de resultados */}
      {showResults && (
        <div className="search-dropdown absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50 mt-1">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <div className="spinner inline-block mr-2"></div>
              <span>Buscando...</span>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.slice(0, 8).map((meal, index) => (
                <div
                  key={meal.idMeal}
                  onClick={() => handleResultClick(meal.idMeal)}
                  className={`search-result-item flex items-center gap-3 px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 ${
                    index === selectedIndex ? 'bg-[#f3e7e8] border-[#994d51]' : ''
                  }`}
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-12 h-12 object-cover rounded-lg shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {highlightMatch(meal.strMeal, query)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {meal.strArea}
                    </p>
                  </div>
                  {index === selectedIndex && (
                    <div className="text-[#994d51]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M181.66,133.66l-80,80A8,8,0,0,1,90.34,202.34L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
              {results.length > 8 && (
                <div
                  onClick={handleSearch}
                  className="search-result-item px-4 py-3 text-center text-sm text-[#994d51] cursor-pointer border-t border-gray-100 font-medium hover:bg-[#f3e7e8]"
                >
                  Ver todos los resultados ({results.length})
                </div>
              )}
            </div>
          ) : query.trim() && !isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256" className="mx-auto mb-2 opacity-50">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"/>
              </svg>
              <p className="text-sm">No se encontraron recetas para "{query}"</p>
              <p className="text-xs mt-1">Intenta con otro término</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}