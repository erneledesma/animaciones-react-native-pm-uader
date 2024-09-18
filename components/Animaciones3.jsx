
import React, {useState, useEffect} from "react";
import {Animated, View, StyleSheet} from "react-native";

const Animaciones3 = () => {
    const [animacion] = useState(new Animated.Value(14));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 40,
            duration: 200,
        }).start();
    }
    , []);

    return (
        <View>
            <Animated.Text style={{fontSize: animacion}}>
                Animacion de texto 3    
            </Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: "center",
    },  
}
);

export default Animaciones3;
