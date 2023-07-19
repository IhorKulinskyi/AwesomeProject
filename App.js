import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import CreatePostScreen from "./Screens/CreatePostScreen";
import Home from "./Screens/HomeScreen";
import Profile from "./Screens/ProfileScreen";
import BottomTab from "./Components/BottomTab";

export default function App() {
  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Home"
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
        {/* <MainStack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
