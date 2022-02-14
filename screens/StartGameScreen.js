import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>StartGameScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartGameScreen;
