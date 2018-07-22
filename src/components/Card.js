import React from "react";
import { View } from "react-native";

const Card = props => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#D3D3D3",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    height: 500,
    justifyContent: "space-around"
  }
};

export default Card;
