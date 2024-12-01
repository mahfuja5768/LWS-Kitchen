import Image from "next/image";
import recipes from "../../data/recipes.json";
import categories from "../../data/categories.json";
import Link from "next/link";
import { getImgUrl } from "@/lib/getImagePath";

const Banner = () => {
  const recipe = recipes?.find(
    (r) => r.title === "Top Vegan Recipes for Healthy Living"
  );
  const foundCategory = categories?.find((category) => {
    category.id === recipe?.category_id;
    return category?.name;
  });

  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={getImgUrl(recipe?.thumbnail)}
            alt={recipe?.title}
            className="w-full h-[450px] object-cover rounded-lg"
            height={450}
            width={400}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{recipe?.title}</h1>
          <p className="text-gray-600 mb-4">{recipe?.description}</p>
          <Link
            href={`/${recipe?.foundCategory}/${recipe?.category_id}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
