import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game</Text>
      <View style={styles.inputContainer}>
        <Text>Please Input the Number</Text>
        <TextInput style={styles.inputText} />
        <View style={styles.buttonContainer}>
          <Button color="red" title="Reset" onPress={() => {}} />
          <Button title="Start Game" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  inputText: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;
