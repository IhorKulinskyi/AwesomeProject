import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { EvilIcons, Feather, AntDesign } from "@expo/vector-icons";

const Post = ({ route, nav, postData }) => {
  const { img, caption, comments, location, likes } = postData;

  function getColor(amount) {
    if (!amount) {
      return {
        icon: "#BDBDBD",
        text: "#BDBDBD",
      };
    }
    return {
      icon: "#FF6C00",
      text: "#212121",
    };
  }

  return (
    <View style={styles.postContainer}>
      <View>
        <Image source={img} />
        <Text>{caption}</Text>
      </View>
      <View style={styles.postActions}>
        <View style={styles.reactions}>
          <View style={styles.commentsView}>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Comments", {
                  screen: `${route.name}`,
                  data: postData,
                });
              }}
            >
              <EvilIcons
                name="comment"
                size={24}
                color={getColor(comments).icon}
              />
            </TouchableOpacity>
            <Text style={{ color: getColor(comments).text }}>{comments}</Text>
          </View>
          {likes && (
            <View style={styles.commentsView}>
              <TouchableOpacity>
                <AntDesign
                  name="like2"
                  size={20}
                  color={getColor(likes).icon}
                />
              </TouchableOpacity>
              <Text style={{ color: getColor(likes).text }}>{likes}</Text>
            </View>
          )}
        </View>
        <View style={styles.commentsView}>
          <Feather name="map-pin" size={20} color="#BDBDBD" />
          <Text>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  commentsView: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  reactions: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  postActions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
});
