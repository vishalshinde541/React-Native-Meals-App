import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";

import MealsList from "../components/mealsList/MealsList";
import { FavoritesContext } from "../store/context/Favorites-contex";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealsList = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMealsList.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.noFavoriteItemText}>
          You have no favorite meals yet.
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMealsList} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavoriteItemText: {
    fontSize: 26,
    color: "white",
  },
});
