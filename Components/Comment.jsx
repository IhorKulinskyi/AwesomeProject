import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Comment = ({ data, index }) => {
  const { date, time, userAvatar, text } = data;
  return (
    <View
      style={[
        styles.commentContainer,
        { flexDirection: index % 2 ? "row-reverse" : "row" },
      ]}
    >
      <View style={styles.userAvatarContainer}>
        <Image source={userAvatar} style={styles.userAvatar} />
      </View>
      <View style={styles.commentBody}>
        <Text style={styles.commentText}>{text}</Text>
        <Text
          style={[
            styles.dateTime,
            { alignSelf: index % 2 ? "flex-start" : "flex-end" },
          ]}
        >
          {date} | {time}
        </Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  commentContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    // justifyContent:"space-between",
    gap: 10,
    // width: "100%",
    borderWidth: 2,
  },
  commentBody: {
    width: "100%",
    flexDirection: "column",
    borderWidth: 1,
    padding: 10,
    // flex:1,
  },
  userAvatarContainer: {
    width: 28,
    height: 28,
    // flex: 0.2,
    borderWidth: 1,
    borderColor: "orange",
  },
  userAvatar: {
    width: 28,
    resizeMode:'cover',
  },
  dateTime: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "green",
    flex:1,
  },
  commentText: {
    borderWidth: 1,
    borderColor: "red",
    flex:1,
  },
});
