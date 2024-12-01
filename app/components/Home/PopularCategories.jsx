import Image from "next/image";
import React from "react";
import categories from "../../data/categories.json";
import recipes from "../../data/recipes.json";
import Link from "next/link";

const PopularCategories = () => {
  const categoryCount = {};

  recipes?.forEach((recipe) => {
    const categoryId = recipe?.category_id;
    categoryCount[categoryId] = (categoryCount[categoryId] || 0) + 1;
  });

  const categoriesWithCounts = categories?.map((category) => {
    return {
      ...category,
      recipeCount: categoryCount[category.id] || 0,
    };
  });

  const sortedCategories = categoriesWithCounts
    ?.sort((a, b) => b?.recipeCount - a?.recipeCount)
    ?.slice(0, 8);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/categories" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {sortedCategories?.map((category) => (
          <div key={category.id} className="cursor-pointer text-center group">
            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
              <Image
                src={`/assets${category.image}`}
                alt={category.name}
                width={80}
                height={80}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="transition-transform duration-300 group-hover:scale-105">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
