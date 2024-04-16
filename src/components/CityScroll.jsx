import React from "react";

function CityScroll() {
  return (
    <section className="bg-gray-200 py-8 px-4">
      <h2 className="text-xl font-bold mb-4">Cities</h2>
      <div className="flex overflow-x-auto">
        <div
          className="bg-white p-4 rounded-lg mr-4"
          style={{ minWidth: "200px" }}
        >
          <h3 className="text-lg font-semibold mb-2">Myrtle Beach, S.C.</h3>
          {/* Additional content for Myrtle Beach */}
        </div>
        <div
          className="bg-white p-4 rounded-lg mr-4"
          style={{ minWidth: "200px" }}
        >
          <h3 className="text-lg font-semibold mb-2">Austin, Tx</h3>
          {/* Additional content for Austin */}
        </div>
        <div
          className="bg-white p-4 rounded-lg mr-4"
          style={{ minWidth: "200px" }}
        >
          <h3 className="text-lg font-semibold mb-2">Naples, Fl</h3>
          {/* Additional content for Naples */}
        </div>
        {/* Add more cities as needed */}
      </div>
    </section>
  );
}

export default CityScroll;
