import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Share } from "react-native";
import { Icon } from "react-native-elements";
import * as firebase from "firebase";
import AppName from "../AppName/appName";
import FirebaseConfig from "../FirebaseConfig";
import Card from "../Card";
import ShareButton from "../Buttons/ShareButton";
import LikeButton from "../Buttons/LikeButton";
import CurrentDate from "../Date";

class Word extends Component {
  constructor(props) {
    super(props);

    this.wordOfTheDay = FirebaseConfig.child("Date");

    this.state = {
      wordDetails: {
        word: "",
        pronunciation: "",
        partOfSpeech: "",
        definition: "",
        example: ""
      }
    };
  }

  getCurrentDate = () => {
    this.day = new Date().getDate();
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();

    switch (this.month) {
      case 1:
        return "January " + this.day + ", " + this.year;
      case 2:
        return "February " + this.day + ", " + this.year;
      case 3:
        return "March " + this.day + ", " + this.year;
      case 4:
        return "April " + this.day + ", " + this.year;
      case 5:
        return "May " + this.day + ", " + this.year;
      case 6:
        return "June " + this.day + ", " + this.year;
      case 7:
        return "July " + this.day + ", " + this.year;
      case 8:
        return "August " + this.day + ", " + this.year;
      case 9:
        return "September " + this.day + ", " + this.year;
      case 10:
        return "October " + this.day + ", " + this.year;
      case 11:
        return "November " + this.day + ", " + this.year;
      case 12:
        return "December " + this.day + ", " + this.year;
        break;
      default:
    }
  };
  actualDay = this.getCurrentDate();

  componentWillMount() {
    this.getWord(this.wordOfTheDay);
    this.getCurrentDate();
  }

  getWord = () => {
    this.wordOfTheDay.path.pieces_.push(this.actualDay);
    this.wordOfTheDay.on("value", snap => {
      this.setState({
        wordDetails: {
          word: snap.child("word").val(),
          pronunciation: snap.child("pronunciation").val(),
          partOfSpeech: snap.child("partOfSpeech").val(),
          definition: snap.child("definition").val(),
          example: snap.child("example").val()
        }
      });
    });
  };

  render() {
    const word = this.state.wordDetails;
    console.log("These are the word details", word);

    return (
      <Card>
        <CurrentDate>{this.getCurrentDate()}</CurrentDate>
        <View>
          <TouchableOpacity>
            <Icon name="volume-up" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.wordHeaderStyle}>
          <Text style={styles.wordStyle}>{word.word}</Text>
          <Text style={styles.pronunciationStyle}>{word.pronunciation}</Text>
          <Text style={styles.partOfSpeechStyle}>{word.partOfSpeech}</Text>
        </View>
        <View style={styles.wordDetailStyle}>
          <Text style={styles.definitionStyle}>{word.definition}</Text>
          <Text style={styles.exampleStyle}>{word.example}</Text>
        </View>
        <View style={styles.wordFeedbackStyle}>
          <LikeButton />
          <ShareButton />
        </View>
      </Card>
    );
  }
}

const styles = {
  wordHeaderStyle: {
    justifyContent: "center"
  },
  wordDetailStyle: {
    marginTop: 30
  },
  wordFeedbackStyle: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  wordStyle: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    paddingBottom: 5
  },
  pronunciationStyle: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 5
  },
  partOfSpeechStyle: {
    fontStyle: "italic",
    fontSize: 12,
    textAlign: "center"
  },
  definitionStyle: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 15
  },
  exampleStyle: {
    fontSize: 16,
    fontStyle: "italic"
  }
};

export default Word;
