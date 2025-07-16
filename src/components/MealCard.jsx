// src/components/MealCard.jsx
// Componente para mostrar una tarjeta de receta individual
import React from 'react';

// Componente que recibe los datos de la receta como "props"
export default function MealCard({ meal }) {
  return (
    // Enlace que navega a la página de detalle de la receta
    <a
      href={`/meal/${meal.idMeal}`} // URL dinámica basada en el ID de la receta
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      // Clases CSS: fondo blanco, bordes redondeados, sombra, animación hover
    >
      {/* Imagen de la receta */}
      <img
        src={meal.strMealThumb} // URL de la imagen desde la API
        alt={`Imagen de ${meal.strMeal}`} // Texto alternativo para accesibilidad
        className="w-full h-48 object-cover" // Imagen responsive con altura fija
      />
      
      {/* Contenedor del texto */}
      <div className="p-4"> {/* Padding interno */}
        {/* Título de la receta */}
        <h3 className="font-bold text-lg truncate">{meal.strMeal}</h3>
        
        {/* País de origen (condicional) */}
        {meal.strArea && (
          <p className="text-sm text-gray-500">{meal.strArea}</p>
        )}
      </div>
    </a>
  );
}