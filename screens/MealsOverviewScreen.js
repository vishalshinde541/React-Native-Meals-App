import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";

// import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ route }) {
  //   const route = useRoute();
  const catId = route.params.categoryId;

  const mealsToDisplay = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId.toString());
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
});
