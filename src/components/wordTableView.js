import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  Button,
  FlatList
} from "react-native";
import { Icon, SearchBar } from "react-native-elements";
import * as firebase from "firebase";
import App from "../../App";
import FirebaseConfig from "./FirebaseConfig";
import LikeButton from "./Buttons/LikeButton";

class WordTableView extends Component {
  static navigationOptions = {
    tabBarLabel: "Words"
  };

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      wordListDataSource: ds
    };

    this.wordsRef = FirebaseConfig.child("Date");
  }

  componentWillMount() {
    this.getWords(this.wordsRef);
  }

  componentDidMount() {
    this.getWords(this.wordsRef);
  }

  getWords = wordsRef => {
    wordsRef.on("value", snap => {
      let words = [];
      snap.forEach(child => {
        words.push({
          word: child.val().word,
          likes: child.val().likes,
          _key: child.key
        });
      });
      this.setState({
        wordListDataSource: this.state.wordListDataSource.cloneWithRows(words)
      });
      console.log("These are the words", words);
    });
  };

  pressRow = () => {
    console.log("I just pressed on the word", word);
  };

  renderRow = word => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.pressRow(word);
        }}
      >
        <View style={styles.listViewStyle}>
          <Text style={styles.listItemStyle}>{word.word}</Text>
          <View style={styles.likesStyle}>
            <LikeButton size={15} />
            <Text style={styles.likesTextStyle}>{word.likes}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <SearchBar platform="ios" placeholder="Search" />
        <ListView
          dataSource={this.state.wordListDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = {
  listViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
    borderBottomWidth: 1
  },
  listItemStyle: {
    fontSize: 20,
    padding: 12
  },
  likesStyle: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center"
  },
  likesTextStyle: {
    marginLeft: 5
  }
};

export default WordTableView;
