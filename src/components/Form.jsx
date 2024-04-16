import React, { useState } from "react";

function Form({ onClose }) {
  const [interests, setInterests] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [smoker, setSmoker] = useState(false);
  const [age, setAge] = useState("");
  const [personalStory, setPersonalStory] = useState("");

  const handleSubmit = () => {
    //data send api
    console.log({
      interests,
      hobbies,
      smoker,
      age,
      personalStory,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Create Your Profile</h2>
        <div className="mb-4">
          <label
            htmlFor="interests"
            className="block text-gray-700 font-semibold mb-2"
          >
            Interests:
          </label>
          <input
            type="text"
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="hobbies"
            className="block text-gray-700 font-semibold mb-2"
          >
            Hobbies:
          </label>
          <input
            type="text"
            id="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <input
              type="checkbox"
              checked={smoker}
              onChange={(e) => setSmoker(e.target.checked)}
              className="mr-2"
            />
            Smoker
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-gray-700 font-semibold mb-2"
          >
            Age:
          </label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="personalStory"
            className="block text-gray-700 font-semibold mb-2"
          >
            Personal Story:
          </label>
          <textarea
            id="personalStory"
            value={personalStory}
            onChange={(e) => setPersonalStory(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full h-32"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
