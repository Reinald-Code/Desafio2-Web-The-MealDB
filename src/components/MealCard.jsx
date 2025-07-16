// Importamos React (necesario para JSX)
import React from 'react';

// Componente MealCard: Representa una tarjeta individual de receta
// Props:
// - meal: Objeto que contiene la información de la receta (nombre, imagen, área, etc.)
export default function MealCard({ meal }) {
  return (
    // Enlace a la página detallada de la receta
    // La clase hover:scale-105 crea un efecto de zoom suave al pasar el mouse
    <a
      href={`/meal/${meal.idMeal}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      {/* Imagen de la receta con tamaño fijo y efecto cover */}
      <img
        src={meal.strMealThumb}
        alt={`Imagen de ${meal.strMeal}`}
        className="w-full h-48 object-cover"
      />
      {/* Contenedor de información textual */}
      <div className="p-4">
        {/* Título de la receta con truncamiento si es muy largo */}
        <h3 className="font-bold text-lg truncate">{meal.strMeal}</h3>
        {/* Área/País de origen (opcional) */}
        {meal.strArea && (
          <p className="text-sm text-gray-500">{meal.strArea}</p>
        )}
      </div>
    </a>
  );
}