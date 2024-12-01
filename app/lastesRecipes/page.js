import Image from "next/image";
import recipes from "../data/recipes.json";

const LatestRecipesPage = () => {
  const latestRecipes = recipes
    ?.sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 4);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes?.map((item, idx) => (
          <div key={idx} className="cursor-pointer">
            <Image
              src={`/assets/${item.thumbnail}`}
              alt={item.title}
              width={300}
              height={200}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.category}</p>
            <a
              href={`/recipe-details.html?recipeId=${item.category_id}`}
              className="text-orange-500 hover:underline"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default LatestRecipesPage;
