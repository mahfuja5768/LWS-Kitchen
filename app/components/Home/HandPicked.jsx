import Image from "next/image";
import React from "react";
import recipes from "../../data/recipes.json"; // Path to your recipes data
import Link from "next/link";

const HandPicked = () => {
  const handPickedRecipes = recipes?.slice(6, 8); 

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {handPickedRecipes?.map((recipe, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
          >
            <Image
              src={`/assets/${recipe?.thumbnail}`}
              alt={recipe?.title}
              height={400}
              width={400}
              className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <h3 className="text-xl font-semibold mb-2">{recipe?.title}</h3>
              <Link
                href={`/recipes.html?recipeId=${recipe.category_id}`}
                className="text-orange-300 hover:underline"
              >
                View Collection
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HandPicked;
