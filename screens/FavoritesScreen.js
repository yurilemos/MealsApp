import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const { ids } = useSelector((state) => state.favoriteMeals);

  const favoritesMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (ids.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
