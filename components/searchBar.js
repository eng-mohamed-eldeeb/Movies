import React from "react";

const SearchBar = () => {
  return (
    <div className="pt-28 lg:pt-14 lg:pl-28 lg:pr-1 2xl:flex 2xl:justify-center 2xl:items-center">
      <form className="container px-0 m-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full lg:text-xl outline-0 focus:border-sky-600 text-gray-900 bg-gray-50 rounded-lg focus:border-b-2  dark:bg-slate-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Search for Movies, TV series"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-400 dark:hover:bg-slate-100 dark:hover:text-gray-800 dark:focus:ring-slate-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
