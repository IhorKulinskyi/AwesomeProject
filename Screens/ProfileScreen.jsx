import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import ProfileImg from "../img/ProfileImg.jpg";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../img/login-bg.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.logOutButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <Image source={ProfileImg} style={styles.userPhoto} />
        <View style={styles.userPhoto}>
          <TouchableOpacity style={styles.closeIcon}>
            <AntDesign name="closecircleo" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>UserName</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.65,
    alignItems: "center",
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 64,
    paddingBottom: 64,
    backgroundColor: "#FFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
  },
  userPhoto: {
    width: 120,
    height: 120,
    backgroundColor: "transparent",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  closeIcon: {
    position: "absolute",
    bottom: 12.5,
    right: -12,
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 32,
  },
  logOutButton: {
    position: "absolute",
    top: 25,
    right: 25,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 80,
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#0000004D",
    backgroundColor: "#FFF",
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

export default ProfileScreen;
