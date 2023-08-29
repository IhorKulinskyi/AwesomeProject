import { StyleSheet, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  SimpleLineIcons,
  Octicons,
  Feather,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import ProfileScreen from "../Screens/ProfileScreen";
import CreatePostsScreen from "../Screens/CreatePostScreen";
import HomeScreen from "../Screens/HomeScreen";
import { removeUser } from "~/redux/user/slice";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const dispatch = useDispatch();

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
        options={({ navigation }) => ({
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerTitleStyle: {
            paddingLeft: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                dispatch(removeUser());
              }}
            >
              <Feather
                style={styles.logOutIcon}
                name="log-out"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="grid" size={size} color={color} />
          ),
          tabBarAccessibilityLabel: "Home",
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerStyle: styles.header,
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerTitleStyle: {
            paddingRight: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.arrowBackIcon}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ size }) => (
            <View style={styles.addIconWrapper}>
              <Ionicons name="add" size={size} color="#FFF" />
            </View>
          ),
          tabBarAccessibilityLabel: "CreatePost",
          tabBarActiveTintColor: "#FFF",
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
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
  header: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#0000004D",
  },
});
