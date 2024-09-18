import { Text, View, StyleSheet } from "react-native";
// import Animaciones1 from "../components/Animaciones1";
// import Animaciones2 from "../components/Animaciones2";
// import Animaciones3 from "../components/Animaciones3";
// import Animaciones4 from "../components/Animaciones4";
 import Animaciones5 from "../components/Animaciones5";

export default function Index() {
  return (
    <View style={styles.contenido}>
      <Text>Esto es una demo de Animaciones con React Native</Text>
      <Animaciones5 />
    </View>
  );
}

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
    marginLeft: 20,
  }
});
