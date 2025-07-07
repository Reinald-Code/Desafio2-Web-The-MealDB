import React from 'react';

// Este componente recibe los datos de la receta como "props"
export default function MealCard({ meal }) {
  return (
    <a
      href={`/meal/${meal.idMeal}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <img
        src={meal.strMealThumb}
        alt={`Imagen de ${meal.strMeal}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{meal.strMeal}</h3>
        {meal.strArea && (
          <p className="text-sm text-gray-500">{meal.strArea}</p>
        )}
      </div>
    </a>
  );
}