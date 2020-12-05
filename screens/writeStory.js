import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AppHeader from "../appHeader";
import db from "../config";
import firebase from "firebase";

export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }

  submitStory  = async () => {
    db.collection("writeStory").add({
      author: this.state.author,
      title: this.state.title,
      date: firebase.firestore.Timestamp.now().toDate(),
      story: this.state.story,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
        <TextInput
          style={styles.inputBox}
          placeholder="Story Title"
          onChangeText={(txt) => {
            this.setState({
              title: txt,
            });
          }}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Author"
          onChangeText={(txt) => {
            this.setState({
              author: txt,
            });
          }}
        />
        <TextInput
          style={styles.StoryWriting}
          placeholder="Write Your Story"
          multiline={true}
          onChangeText={(txt) => {
            this.setState({
              story: txt,
            });
          }}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
            </TouchableWithoutFeedback> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: 200,
    height: 50,
    margin: 10,
    borderWidth: 1.5,

    fontSize: 20,
  },
  StoryWriting: {
    width: 200,
    height: 100,
    borderWidth: 1.5,

    fontSize: 20,
  },
  submitButton: {
    marginTop: 50,
    backgroundColor: "orange",
    width: 200,
    borderWidth: 1.5,
  },
  submitText: { fontSize: 30, textAlign: "center", fontWeight: "bold" },
});
