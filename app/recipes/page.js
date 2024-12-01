import Image from "next/image";
import Link from "next/link";
import React from "react";
import recipes from "../data/recipes.json";

const CategorizedRecipes = () => {
  // Filter recipes by category "Desserts" (assuming you have a category field in your JSON)
  const categorizedRecipes = recipes.filter(
    (recipe) => recipe.category === "Desserts"
  );

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Desserts{" "}
            <span className="text-gray-500 text-2xl font-normal">
              ({categorizedRecipes.length} Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Render each recipe in the "Desserts" category */}
        {categorizedRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            {/* Make sure to use the correct image path from your assets */}
            <Image
              src={`./assets/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-48 object-cover"
              height={192} // Adjusted the height to match the image size
              width={256} // Adjusted the width accordingly
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
              <Link href={`/recipe/${recipe.id}`}>
                <a className="text-orange-500 hover:text-orange-600">
                  View Recipe
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategorizedRecipes;
