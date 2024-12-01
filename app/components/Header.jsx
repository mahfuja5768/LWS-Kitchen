import Image from "next/image";
import logo from "/public/assets/lws-kitchen.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          <Image
            src={logo}
            width={100}
            height={10}
            className="h-10"
            alt="Logo"
          />
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/lastesRecipes" className="hover:text-orange-500">
              Latest Recipes
            </Link>
          </li>
          <li>
            <Link href="/handPicked" className="hover:text-orange-500">
              Hand Picked
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
