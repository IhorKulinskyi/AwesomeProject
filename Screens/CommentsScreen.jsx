import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import PostImage from "../img/PostImage1.jpg";
import { TextInput } from "react-native-gesture-handler";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

const CommentsScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -249}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={PostImage} />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Коментувати..." />
            <TouchableOpacity style={styles.sendButton}>
              <AntDesign name="arrowup" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // width: "100%",
  },
  imageContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  sendButton: {
    borderRadius: 50,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 8,
    right: 7,
  },
});
