import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Comment from "../Components/Comment";

const CommentsScreen = ({ route }) => {
  const { data } = route.params;
  const comments = data.commentsTexts;
  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -249}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={data.img} />
          </View>
          <View style={{flex:1}}>
            <SafeAreaView>
              <FlatList
                contentContainerStyle={styles.commentContainer}
                data={comments}
                renderItem={({ item, index }) => <Comment data={item} index={index}/>}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
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
  },
  imageContainer: {
    flex: 0.8,
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
  commentContainer: {
    flexDirection: "column",
    gap: 20,
  },
  inputWrapper: {
    // flex:1,
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
