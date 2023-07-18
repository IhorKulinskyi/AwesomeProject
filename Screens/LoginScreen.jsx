import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const LoginScreen = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLogIn = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert("Password should be at least 8 characters");
      return;
    }

    Alert.alert("Login Success", "User logedd in successfully!");
    resetForm();
    console.log(`email: ${email}`);
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      enabled="true"
      style={styles.wrapper}
    >
      <ImageBackground
        source={require("../img/login-bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Адреса електронної пошти"
            ></TextInput>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="Пароль"
                secureTextEntry={!visible}
                style={styles.input}
              ></TextInput>
              <TouchableOpacity
                onPress={() => {
                  setVisible((v) => !v);
                }}
                style={styles.showPassword}
              >
                <Text style={styles.showPasswordText}>
                  {visible ? "Сховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogIn}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.loginRef}>
              Немає акаунту?{" "}
              <Text style={styles.loginRefLink}>Зареєструватися</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 32,
    paddingBottom: 144,
    backgroundColor: "#FFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 48,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    alignItems: "center",
    width: "100%",
    marginBottom: 48,
  },
  inputWrapper: {
    width: "100%",
    position: "relative",
  },
  showPassword: {
    flex: 1,
    position: "absolute",
    top: "36.5%",
    left: "78%",
  },
  showPasswordText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    color: "#1B4371",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    width: "100%",
    padding: 15,
  },
  button: {
    width: "100%",
    backgroundColor: "#FF6C00",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginRef: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    color: "#1B4371",
  },
  loginRefLink: {
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
