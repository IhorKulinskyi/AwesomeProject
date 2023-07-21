import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import userPhoto from "../img/User.jpg";
import { FlatList } from "react-native-gesture-handler";
import { postsArray } from "../data/posts";
import Post from "../Components/Post";

const HomeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.useInfo}>
          <Image source={userPhoto} />
          <View>
            <Text>Name Surname</Text>
            <Text>email@example.com</Text>
          </View>
        </View>
        <SafeAreaView>
          <FlatList
            contentContainerStyle={styles.postContainer}
            data={postsArray}
            renderItem={({ item }) => (
              <Post
                nav={navigation}
                postData={item}
                route={route}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
  },
  mainContent: {
    flex: 0.84,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "flex-start",
  },
  useInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 40,
  },
  addIconWrapper: {
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  postContainer: {
    flexDirection: "column",
    gap: 20,
    // alignItems: "center",
  },
  commentsView: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  commentsAmount: {
    color: "#BDBDBD",
  },
  postActions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default HomeScreen;
