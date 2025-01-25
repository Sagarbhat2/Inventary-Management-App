import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <img
          className=" absolute top-0 left-0 w-auto h-25"
          src="Gyan.jfif"
          alt="Image"
        />
        <div className="absolute mb-18 left-24 text-4xl"><p>Gyan<span className="text-green-500">Grove</span> </p></div>
        <a href="https://www.gyangrove.co/" id="Home" className="absolute -right-0 top-5 h-10 w-20 mr-5 flex justify-center items-center bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
  Home
</a>
        <h1 className=" absolute left-43 font-bold text-3xl mt-18">
          Dynamic <span className="text-green-600">Inventory</span> Management Table
        </h1>
      </div>
      <br />
    </div>
  );
};

export default Navbar;
