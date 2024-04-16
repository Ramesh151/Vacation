import React from "react";

const SearchSection = () => {
  return (
    <section className="my-8">
      <input
        type="text"
        placeholder="Search Destinations"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-500"
      />
    </section>
  );
};

export default SearchSection;
