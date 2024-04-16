import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Form from "./components/Form";
import CityScroll from "./components/CityScroll";

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleCreateProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  };

  const data = [
    {
      name: "Gauest House",
      address: "Thane West, Mumbai",
      price: "1999",
      img: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Goa House",
      address: "Ghatkopar West, Mumbai",
      price: "1999",
      img: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
    },
    {
      name: "Enter House",
      address: "Andheri West, Mumbai",
      price: "1999",
      img: "https://assets.cntraveller.in/photos/60ba1a68591f977adc9775e7/master/w_1600%2Cc_limit/Screenshot-2020-02-05-at-6.53.08-PM-866x526.jpg",
    },
  ];

  return (
    <>
      <Header />
      <div className=" grid col-span-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {data.map((data, index) => {
          return (
            <Hero
              key={index}
              name={data.name}
              address={data.address}
              price={data.price}
              img={data.img}
            />
          );
        })}
      </div>

      <section className="bg-gray-900 text-white py-20 px-4 text-center rounded-lg">
        <Section2 handleCreateProfileClick={handleCreateProfileClick} />
        {isProfileOpen && <Form onClose={handleCloseProfile} />}
      </section>

      <CityScroll />
      <Footer />
    </>
  );
}

export default App;
