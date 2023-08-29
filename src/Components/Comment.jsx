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
      <View
        style={[
          styles.commentBody,
          index % 2
            ? { borderTopLeftRadius: 6, borderTopRightRadius: 0 }
            : { borderTopLeftRadius: 0, borderTopRightRadius: 6 },
        ]}
      >
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
    gap: 10,
  },
  commentBody: {
    width: "91%",
    flexDirection: "column",
    padding: 15,
    backgroundColor: "#00000008",
    borderRadius: 6,
  },
  userAvatarContainer: {
    width: 28,
    height: 28,
  },
  userAvatar: {
    width: 28,
    resizeMode: "cover",
  },
  dateTime: {
    flexDirection: "row",
    flex: 1,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 11,
  },
  commentText: {
    flex: 1,
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
    marginBottom: 8,
  },
});
