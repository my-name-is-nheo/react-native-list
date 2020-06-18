import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Alert } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [stateArray, setStateArray] = useState([]);

  const onPressToAdd = () => {
    setCount(count + 1);
  };
  const onPressToSubtract = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text>COUNT-ER</Text>
      <Button title="Press me to Add" onPress={onPressToAdd} />
      <Text>{count === 0 ? 0 : count}</Text>
      <Button title="Press me to Subtract" onPress={onPressToSubtract} />
      <Button
        title="Press me to Add to Total"
        onPress={() => {
          setStateArray(stateArray.concat([count]));
        }}
      />
      {stateArray.map((n) => {
        return <Text>{n}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
