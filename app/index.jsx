import { Text, View, StyleSheet } from "react-native";
// import Animaciones1 from "../components/Animaciones1";
import Animaciones2 from "../components/Animaciones2";

export default function Index() {
  return (
    <View style={styles.contenido}>
      <Text>Esto es una demo de Animaciones.</Text>
      <Animaciones2 />
    </View>
  );
}

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
    marginLeft: 20,
  }
});
