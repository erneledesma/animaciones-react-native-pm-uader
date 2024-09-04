import  React, { useEffect } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';


export const Animaciones1 = () => {

    const animacion = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 1, // al valor que llega
                duration: 3000, // cantidad de tiempo en llegar
            }
        ).start(); // iniciar la animacion
    }, []);


  return (
    <Animated.View style={{opacity: animacion}}>

        <Text style={styles.texto}>Animacion 1</Text>

    </Animated.View>
  )
}

const styles = StyleSheet.create({
    texto: {   
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animaciones1;
