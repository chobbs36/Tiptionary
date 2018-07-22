import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

class AppName extends Component {
  render() {
    return <Text style={styles.title}>TIPs Word Of The Day</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default AppName;
