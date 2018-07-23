import React from "react";
import { Text, View, Switch } from "react-native";

const Settings = () => {
  return (
    <View style={styles.pushNotificationStyles}>
      <Text>Push Notifications</Text>
      <Switch
        onValueChange={value => console.log("SWITCH is working")}
        value={false}
      />
    </View>
  );
};

const styles = {
  pushNotificationStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "black",
    borderTopColor: "black"
  }
};

export default Settings;
