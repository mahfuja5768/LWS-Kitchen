import Image from "next/image";
import StarSvg from "../shared/StarSvg";
import recipes from "../../data/recipes.json";
import { getImgUrl } from "@/lib/getImagePath";

const SuperDelicious = () => {

  const topRatedRecipes = recipes
    .sort((a, b) => b?.rating?.rating_count - a?.rating?.rating_count)
    .slice(0, 3);

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {topRatedRecipes.map((recipe, idx) => (
          <div key={idx} className="cursor-pointer">
            <Image
              src={getImgUrl(recipe?.thumbnail)}
              alt={recipe?.title}
              height={300}
              width={300}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{recipe?.title}</h3>
            <div className="flex items-center text-yellow-500 mb-2">
              {[...Array(5)].map((_, index) => (
                <StarSvg key={index} filled={index < recipe.ratingCount} />
              ))}
            </div>
            <p className="text-gray-600">{recipe.cooking_time} Minutes</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuperDelicious;
