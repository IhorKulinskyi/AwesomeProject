import { StyleSheet, Text, View, TouchableOpacity,Image  } from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";

const Post = ({img, caption, comments, location, nav}) => {
  return (
    <View style={styles.postContainer}>
    <View>
      <Image source={img} />
      <Text>{caption}</Text>
    </View>
    <View style={styles.postActions}>
      <View style={styles.commentsView}>
        <TouchableOpacity onPress={()=>{nav.navigate("Comments")}}>
          <EvilIcons name="comment" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.commentsAmount}>{comments}</Text>
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
        alignItems:"center",
      },
      commentsView: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
      },
      commentsAmount:{
        color:"#BDBDBD",
      },
      postActions: {
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
      },
});
