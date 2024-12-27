// FoodSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "../components/Loading";

type FoodItem = {
  foodName: string;
  foodPrice: number;
};

const fetchFoodData = async (): Promise<FoodItem[]> => {
  const response = await fetch(
    "http://localhost:2002/api/v1/food?pageNumber=0&pageSize=10&sortBy=id&sortOrder=ASCENDING"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch food data");
  }

  return response.json();
};

const FoodSection = () => {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFoodData = async () => {
      try {
        const data = await fetchFoodData();
        setFoods(data);
      } catch (err) {
        console.log(err);
        setError("Failed to load food data.");
      } finally {
        setLoading(false);
      }
    };

    loadFoodData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="py-10 px-5 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center mb-10 text-gray-800">
        Food Menu
      </h1>
      <section className="container mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food, index) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800">
                  {food.foodName}
                </h2>
                <p className="text-xl font-semibold text-green-600 mt-4">
                  ${food.foodPrice}
                </p>
                <Link href={`/food/${food.foodName}`}>
                  <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FoodSection;
