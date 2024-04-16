import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-pink-500 p-4 flex justify-between items-center rounded-lg">
        <div className="text-white text-lg font-bold">
          SHE SHARE VACATION RENTALS
        </div>
        <nav>
          <div class="flex lg:order-1 max-sm:ml-auto">
            <button class="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-black transition-all ease-in-out duration-300 hover:bg-transparent hover:text-black">
              Login
            </button>
            <button class="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-black transition-all ease-in-out duration-300 hover:bg-transparent hover:text-black ml-3">
              Sign up
            </button>
            <button id="toggle" class="lg:hidden ml-7">
              <svg
                class="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
