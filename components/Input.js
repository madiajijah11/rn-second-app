import React from "react";
import {StyleSheet, TextInput } from "react-native";

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}} />;
}

const styles = StyleSheet.create({
  input: {
    width: 50,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default Input;