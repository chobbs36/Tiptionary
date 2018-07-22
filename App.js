import React from "react";
import { StyleSheet, Text, View, ListView } from "react-native";
import AppName from "./src/components/AppName/appName";
import Word from "./src/components/Word/word";
import WordTableView from "./src/components/wordTableView";
import * as firebase from "firebase";
import FirebaseConfig from "./src/components/FirebaseConfig";
import RootNavigator from "./src/components/RootNavigator";
import CurrentDate from "./src/components/Date";
import Settings from "./src/components/Settings";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appName}>
        <AppName />
      </View>
      <RootNavigator />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-around"
  },
  wordContainer: {
    alignItems: "flex-start",
    marginHorizontal: 40
  },
  appName: {
    paddingTop: 50,
    marginTop: 30,
    marginBottom: 30,
    alignSelf: "center"
  }
};

export default App;
