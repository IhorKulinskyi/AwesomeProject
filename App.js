import "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import BottomTab from "./Components/BottomTab";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";

export default function App() {
  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="HomeScreen"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({ navigation }) => ({
            headerTitle: "Коментарі",
            headerLeftContainerStyle: {
              paddingLeft: 20,
            },
            headerTitleStyle: {
              paddingRight: 20,
            },
            headerStyle: {
              borderBottomWidth: 0.5,
              borderBottomColor: "#0000004D",
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={({ navigation }) => ({
            headerTitle: "Мапа",
            headerLeftContainerStyle: {
              paddingLeft: 20,
            },
            headerTitleStyle: {
              paddingRight: 20,
            },
            headerStyle: {
              borderBottomWidth: 0.5,
              borderBottomColor: "#0000004D",
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
