import { useRouter } from "next/router";
import recipes from "../../data/recipes.json";
import Image from "next/image";

const RecipeDetails = () => {
  // Use useRouter hook to access the URL params
  const router = useRouter();
  const { category, recipe } = router.query; // Get 'category' and 'recipe' from the URL query

  // Find the selected recipe based on the category and recipe ID from the URL
  const selectedRecipe = recipes?.find(
    (r) => r.id === recipe && r.category === category
  );

  if (!selectedRecipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          A full guide for a better and smarter cooking
        </h1>
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="./assets/avater.png"
            alt="Author"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-600">Tricia Albert</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">15 mins</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">12 Nov 2021</span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              Save
            </button>
          </div>
        </div>
        <Image
          src={`./assets/${selectedRecipe.image}`}
          alt={selectedRecipe.title}
          className="w-full h-auto mb-8 rounded-lg"
        />
        <p className="text-gray-600 mb-8">{selectedRecipe.description}</p>

        <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
        <p className="mb-8">{selectedRecipe.beforeYouBegin}</p>

        <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
        <p className="mb-8">{selectedRecipe.basics}</p>

        <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
          "One cannot think well, love well, sleep well, if one has not dined
          well."
        </blockquote>
        <p className="text-center text-gray-600 mb-12">
          — Virginia Woolf, A Room of One's Own
        </p>

        <h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
        <p className="mb-8">{selectedRecipe.inTheKitchen}</p>

        <img
          src={`./assets/${selectedRecipe.thumbnail}`}
          alt="Cooking in kitchen"
          className="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
        />

        <p className="mb-8">{selectedRecipe.finalThoughts}</p>
      </article>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recipes.slice(0, 4).map((suggestedRecipe) => (
            <div key={suggestedRecipe.id}>
              <img
                src={`./assets/${suggestedRecipe.image}`}
                alt={suggestedRecipe.title}
                className="w-full h-60 object-cover rounded-lg mb-2"
              />
              <h3 className="font-semibold">{suggestedRecipe.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default RecipeDetails;
