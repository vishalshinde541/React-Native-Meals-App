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
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
