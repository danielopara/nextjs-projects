"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Loading from "@/app/components/Loading";

type FoodItem = {
  foodName: string;
  foodPrice: number;
};

const fetchFoodData = async (slug: string): Promise<FoodItem> => {
  const response = await fetch(`http://localhost:2002/api/v1/food/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch food data");
  }
  // console.log(response.json());
  return response.json();
};

const FoodDetails = () => {
  const params = useParams();
  const slug = params.slug as string;

  const [food, setFood] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const loadFoodData = async () => {
        try {
          const data = await fetchFoodData(slug);
          console.log(data);
          setFood(data);
        } catch (err) {
          console.log(err);
          setError("Failed to load food data.");
        } finally {
          setLoading(false);
        }
      };
      loadFoodData();
    }
  }, [slug]);

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
    <section className="container mx-auto p-5">
      {food && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">
              {food.foodName}
            </h2>
            <p className="text-xl font-semibold text-green-600 mt-4">
              ₦{food.foodPrice}
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodDetails;
