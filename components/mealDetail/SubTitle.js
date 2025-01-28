import { Text, View, StyleSheet } from "react-native";

function SubTitle() {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>InGredients</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  detailText: {
    color: "white",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e2b497",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
