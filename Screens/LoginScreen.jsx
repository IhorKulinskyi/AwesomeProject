import { View, TextInput, TouchableOpacity, Text } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <Text>Увійти</Text>
      <TextInput placeholder="Адреса електронної пошти"></TextInput>
      <TextInput placeholder="Пароль"></TextInput>
      <TouchableOpacity>
        <Text>Увійти</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Немає акаунту? Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
