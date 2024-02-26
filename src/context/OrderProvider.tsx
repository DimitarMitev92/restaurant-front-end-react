import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { IMeal } from "../static/interfaces";
import { endpointAPI, method } from "../static/endpoints";
import { fetchDataFromApi } from "../services/fetchDataFromApi";

interface OrderContextProps {
  meals: IMeal[];
  addMealToBasket: Dispatch<SetStateAction<IMeal[]>>;
  removeMealFromBasket: (mealId: string) => void;
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
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [meals, setMeals] = useState<IMeal[]>([]);

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

  const addMealToBasket: Dispatch<SetStateAction<IMeal[]>> = async (
    meal: IMeal[] | ((prevState: IMeal[]) => IMeal[])
  ) => {
    const newMeals = typeof meal === "function" ? meal(meals) : meal;

    for (const newMeal of newMeals) {
      const existingMealIndex = meals.findIndex((m) => m.id === newMeal.id);

      if (existingMealIndex !== -1) {
        // If meal with the same ID exists, increment count by 1
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
            count: 1,
          };
          setMeals((prevMeals) => [...prevMeals, updatedMeal]);
        } else {
          setMeals((prevMeals) => [...prevMeals, { ...newMeal, count: 1 }]);
        }
      }
    }
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
  };

  const contextValues: OrderContextProps = {
    meals,
    addMealToBasket,
    removeMealFromBasket,
  };

  return (
    <OrderContext.Provider value={contextValues}>
      {children}
    </OrderContext.Provider>
  );
};
