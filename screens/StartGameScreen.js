import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleInput = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  }

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
  }

  let confirmedOutput;
 
  if (confirmed) {
    confirmedOutput = <Text>The chosen number is: {selectedNumber}</Text>;
  }


  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Please Input the Number</Text>
          <Input
            style={styles.inputText}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleInput}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonSize}>
              <Button color="red" title="Reset" onPress={resetInput} />
            </View>
            <View style={styles.buttonSize}>
              <Button title="Start Game" onPress={confirmInput} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  },
  inputText: {
    width: 50,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  buttonSize: {
    width: 100,
  },
});

export default StartGameScreen;
