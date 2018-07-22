import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const LikeButton = props => {
  return (
    <TouchableOpacity>
      <Icon name="heart-o" type="font-awesome" size={props.size} />
    </TouchableOpacity>
  );
};

export default LikeButton;
