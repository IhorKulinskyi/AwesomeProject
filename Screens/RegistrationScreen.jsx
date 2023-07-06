import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { useState } from "react";
import AddIcon from "../assets/addIcon.svg";

const RegistrationScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <ImageBackground
        source={require("../img/login-bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.userPhoto}>
            <TouchableOpacity style={styles.addIcon}>
              <AddIcon width={30} height={30} fill={"#FF6C00"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Логін"></TextInput>
            <TextInput
              keyboardType="email-address"
              placeholder="Адреса електронної пошти"
              style={styles.input}
            ></TextInput>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Пароль"
                secureTextEntry={!visible}
                style={styles.input}
              ></TextInput>
              <Pressable
                onPress={() => {
                  setVisible((v) => !v);
                }}
                style={styles.showPassword}
              >
                <TouchableOpacity>
                  <Text style={styles.showPasswordText}>Показати</Text>
                </TouchableOpacity>
              </Pressable>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginRef}>Вже є акаунт? Увійти</Text>
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
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  addIcon: {
    position: "absolute",
    bottom: 12.5,
    right: -12.5,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 32,
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
    position: "absolute",
    top: "36.5%",
    left: "78%",
  },
  showPasswordText: {
    fontSize: 16,
    fontWeight: 400,
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
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
  },
  loginRef: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
