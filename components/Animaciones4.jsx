import React, {useState, useEffect} from "react";
import {Animated, View, StyleSheet} from "react-native";

const Animaciones4 = () => {
    
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 360, // el valor que queremos que llegue
            duration: 500, // cantidad de tiempo en llegar
        }).start(); // iniciar la animacion
    }
    , []);

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ["0deg", "360deg"],
    });

    const estiloAnimacion = {
        transform: [{rotate: interpolacion}],
    };

    return (
        <View>
            <Animated.View style={[styles.caja, estiloAnimacion]}>  
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: "cornflowerblue",
    },
});

export default Animaciones4;