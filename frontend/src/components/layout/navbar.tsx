import React from "react";
import { ShoppingCart, Search, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥬</span>
            <h1 className="text-2xl font-bold">
              Deri<span className="text-yellow-300">Bazaar</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-yellow-300 transition">
              Home
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              Vegetables
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              Fruits
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              Seasonal
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              Contact
            </a>
          </div>

          {/* Search + Cart */}
          <div className="hidden md:flex items-center gap-4">
            <button className="hover:text-yellow-300">
              <Search size={22} />
            </button>

            <button className="relative hover:text-yellow-300">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 rounded-full">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;