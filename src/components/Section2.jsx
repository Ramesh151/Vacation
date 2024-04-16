import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Section2 = ({ handleCreateProfileClick }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to SHE SHARE VACATION RENTALS
            </h1>
            <p className="text-lg">
              Where women connect and share amazing vacation rentals!
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <div className="relative w-full md:w-64">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Check-in"
                className="block w-full px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:bg-gray-700 focus:outline-none"
              />
            </div>
            <div className="relative w-full md:w-64">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="Check-out"
                className="block w-full px-4 py-3 rounded-lg bg-gray-800 placeholder-gray-400 text-white focus:bg-gray-700 focus:outline-none"
              />
            </div>
            <div>
              <button
                onClick={handleCreateProfileClick}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded"
              >
                Create a Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
