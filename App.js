import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CaregoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar styles="light" />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
