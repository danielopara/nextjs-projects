import React from "react";
import "animate.css";

export default function Intro() {
  return (
    <div className="container">
      <section className="py-10  rounded-xl ">
        <div className="max-w-4xl mx-auto text-center text-black p-8 bg-opacity-80 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
            Welcome To Our Restaurant
          </h1>

          <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
            We offer quality food and services to you. Your next great meal is
            just a click away.
          </p>

          <a href="/food">
            <button className="animate__animated animate__fadeIn animate__delay-2s px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all">
              Explore Menu
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
