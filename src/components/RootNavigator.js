import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import Word from "./Word/word";
import WordTableView from "./wordTableView";
import Settings from "./Settings";

const RootStack = TabNavigator({
  Home: {
    screen: Word,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: <Icon name="ios-home-outline" type="ionicon" />
    }
  },
  Words: {
    screen: WordTableView,
    navigationOptions: {
      tabBarLabel: "Words",
      tabBarIcon: <Icon name="ios-book-outline" type="ionicon" />
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: "Settings",
      tabBarIcon: <Icon name="settings" type="simplelineicon" />
    }
  }
});

const RootNavigator = () => {
  return <RootStack />;
};

export default RootNavigator;
