import { PulseLoader } from "react-spinners";
import { MostOrderedMeal } from "../../../MostOrderedMeal/MostOrderedMeal";
import { useMostOrderedMeals } from "../../../../hooks/useMostOrdered";
import { useEffect, useState } from "react";
import { MostOrderedMeals } from "../../../../static/interfaces";
import { MostOrderedWrapper } from "./LandingMostOrdered.style";
import { Title } from "../LandingRestaurants/LandingRestaurants.style";
import { CardsContainer } from "./LandingMostOrdered.style";

export const LandingMostOrdered = () => {
  const { meals, loading, error } = useMostOrderedMeals();
  const [mostOrderedMeals, setMeals] = useState<MostOrderedMeals[]>([]);

  useEffect(() => {
    setMeals(meals);
  }, [meals]);
  return (
    <MostOrderedWrapper id="most-ordered">
      <Title style={{ padding: "40px", textAlign: "start" }}>
        Most Ordered Meals
      </Title>
      {loading && <PulseLoader color="var(--color-green)" size={12} />}
      {error && <p>Error fetching most ordered meals</p>}
      <CardsContainer>
        {!loading &&
          !error &&
          mostOrderedMeals &&
          mostOrderedMeals.map((meal) => {
            return <MostOrderedMeal key={meal.meal_id} meal={meal} />;
          })}
      </CardsContainer>
    </MostOrderedWrapper>
  );
};
