import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, SimpleLineIcons, Octicons } from "@expo/vector-icons";
import ProfileScreen from "../Screens/ProfileScreen";
import CreatePostsScreen from "../Screens/CreatePostScreen";
import HomeScreen from "../Screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: "#0000004D",
          backgroundColor: "#FFF",
          paddingBottom: 20,
          paddingHorizontal: 40,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="grid" size={size} color={color} />
          ),
          tabBarAccessibilityLabel: "Home",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <View style={styles.addIconWrapper}>
              <Ionicons name="add" size={size} color="#FFF" />
            </View>
          ),
          tabBarAccessibilityLabel: "CreatePost",
          tabBarActiveTintColor: "#FFF",
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Octicons name="person" size={size} color={color} />
          ),
          tabBarAccessibilityLabel: "Profile",
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
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
