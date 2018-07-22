import React, { Component } from "react";
import { TouchableOpacity, Share } from "react-native";
import { Icon } from "react-native-elements";

shareWord = () => {
  Share.share({
    message: "Check out this new app",
    title: "YOOO"
  });
};

const ShareButton = () => {
  return (
    <TouchableOpacity onPress={() => this.shareWord()}>
      <Icon name="share-apple" type="evilicon" size={42} />
    </TouchableOpacity>
  );
};

export default ShareButton;
