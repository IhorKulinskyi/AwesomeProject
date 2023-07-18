import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  Ionicons,
  SimpleLineIcons,
  Octicons,
  Feather,
} from "@expo/vector-icons";
import userPhoto from "../img/User.jpg";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.postsTitle}>Публікації</Text>
        <TouchableOpacity>
          <Feather
            style={styles.logOutIcon}
            name="log-out"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.useInfo}>
          <Image source={userPhoto} />
          <View>
            <Text>Name Surname</Text>
            <Text>email@example.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <SimpleLineIcons name="grid" size={24} color="#212121CC" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.addIconWrapper}>
            <Ionicons name="add" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons name="person" size={24} color="#212121CC" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor:"#0000004D",
  },
  postsTitle: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    color: "#212121",
  },
  logOutIcon: {
    marginLeft: -24,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "flex-start",
  },
  useInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 80,
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor:"#0000004D",
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
});

export default Home;
