import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Section 1 */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h4 className="text-lg font-bold mb-2">SHE SHARE</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Follow Us
              </a>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h4 className="text-lg font-bold mb-2">Support</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cancellation Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h4 className="text-lg font-bold mb-2">Become a Host</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Hosting Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hosting Responsibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Share a Room
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pets
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h4 className="text-lg font-bold mb-2">Terms & Conditions</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
