import React, { Component } from "react";
import { View, Text, Alert, Button } from "react-native";

const CurrentDate = props => {
  // day = new Date().getDate();
  // month = new Date().getMonth() + 1;
  // year = new Date().getFullYear();

  // componentWillMount() {
  //   console.log("DATE", this.month);
  //   this.getCurrentDate();
  // }

  // getCurrentDate = month => {
  //   switch (this.month) {
  //     case 1:
  //       return (
  //         <Text>
  //           January {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 2:
  //       return (
  //         <Text>
  //           February {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 3:
  //       return (
  //         <Text>
  //           March {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 4:
  //       return (
  //         <Text>
  //           April {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 5:
  //       return (
  //         <Text>
  //           May {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 6:
  //       return (
  //         <Text>
  //           June {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 7:
  //       return (
  //         <Text>
  //           July {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 8:
  //       return (
  //         <Text>
  //           August {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 9:
  //       return (
  //         <Text>
  //           September {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 10:
  //       return (
  //         <Text>
  //           October {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 11:
  //       return (
  //         <Text>
  //           November {this.day}, {this.year}
  //         </Text>
  //       );
  //     case 12:
  //       return (
  //         <Text>
  //           December {this.day}, {this.year}
  //         </Text>
  //       );
  //       break;
  //     default:
  //   }
  // };
  console.log("DATE props", props);
  return (
    <View>
      <Text style={styles.curentDateStyle}>{props.children}</Text>
    </View>
  );
};

const styles = {
  curentDateStyle: {
    fontSize: 12,
    textAlign: "center"
  }
};

export default CurrentDate;
