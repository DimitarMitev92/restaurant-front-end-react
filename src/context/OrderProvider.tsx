import React, { createContext, useContext, useState } from "react";
import { IMeal } from "../static/interfaces";
import { endpointAPI, method } from "../static/endpoints";
import { fetchDataFromApi } from "../services/fetchDataFromApi";

interface OrderContextProps {
  meals: IMeal[];
  totalPrice: number;
  addMealToBasket: (meal: IMeal[] | ((prevState: IMeal[]) => IMeal[])) => void;
  removeMealFromBasket: (mealId: string) => void;
  addAdditionalNoteForMeal: (mealId: string, additionalNote: string) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};

interface OrderProviderProps {
  children: React.ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getPackagePrice = async (packageId: string) => {
    const url = `${endpointAPI.PACKAGE}/${packageId}`;
    const accessToken = sessionStorage.getItem("access_token");
    const packageData = await fetchDataFromApi(
      url,
      accessToken,
      method.GET,
      null,
      "Error fetching package"
    );
    return packageData;
  };

  const calculateTotalPrice = () => {
    let total = 0;
    meals.forEach((meal) => {
      total += meal.price * meal.count + meal.packagePrice * meal.count;
    });
    setTotalPrice(total);
  };

  const addMealToBasket = async (
    meal: IMeal[] | ((prevState: IMeal[]) => IMeal[])
  ) => {
    const newMeals = typeof meal === "function" ? meal(meals) : meal;

    for (const newMeal of newMeals) {
      const existingMealIndex = meals.findIndex((m) => m.id === newMeal.id);

      if (existingMealIndex !== -1) {
        setMeals((prevMeals) => {
          const updatedMeals = [...prevMeals];
          updatedMeals[existingMealIndex] = {
            ...updatedMeals[existingMealIndex],
            count: updatedMeals[existingMealIndex].count + 1,
          };
          return updatedMeals;
        });
      } else {
        if (!newMeal.packagePrice) {
          const packageData = await getPackagePrice(newMeal.packageId);
          const updatedMeal = {
            ...newMeal,
            packagePrice: packageData.price,
            additionalNote: "",
            count: 1,
          };
          setMeals((prevMeals) => [...prevMeals, updatedMeal]);
        } else {
          setMeals((prevMeals) => [...prevMeals, { ...newMeal, count: 1 }]);
        }
      }
    }

    calculateTotalPrice();
  };

  const removeMealFromBasket = (mealId: string) => {
    setMeals((prevMeals) => {
      const updatedMeals = prevMeals.map((meal) => {
        if (meal.id === mealId && meal.count >= 1) {
          return { ...meal, count: meal.count - 1 };
        }
        return meal;
      });

      return updatedMeals.filter(
        (meal) => meal.id !== mealId || meal.count >= 1
      );
    });

    calculateTotalPrice();
  };

  const addAdditionalNoteForMeal = (mealId: string, additionalNote: string) => {
    setMeals((prevMeals) => {
      const updatedMeals = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return { ...meal, additionalNote: additionalNote };
        }
        return meal;
      });

      return updatedMeals;
    });
  };

  const contextValues: OrderContextProps = {
    meals,
    totalPrice,
    addMealToBasket,
    removeMealFromBasket,
    addAdditionalNoteForMeal,
  };

  return (
    <OrderContext.Provider value={contextValues}>
      {children}
    </OrderContext.Provider>
  );
};
