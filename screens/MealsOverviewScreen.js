import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealsList from "../components/mealsList/MealsList";

// import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ route, navigation }) {
  //   const route = useRoute();
  const catId = route.params.categoryId;

  const mealsToDisplay = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId.toString());
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={mealsToDisplay} />;
}

export default MealsOverviewScreen;
