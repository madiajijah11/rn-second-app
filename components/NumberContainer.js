import React from "react";
import { StyleSheet, View, Text } from "react-native";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: "black",
    }
});

export default NumberContainer;
