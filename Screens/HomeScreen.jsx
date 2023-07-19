import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import userPhoto from "../img/User.jpg";

const HomeScreen = () => {
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
    borderTopColor: "#0000004D",
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

export default HomeScreen;
