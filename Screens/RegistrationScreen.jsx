import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Alert,
  Platform,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import AddIcon from "../assets/addIcon.svg";

const RegistrationScreen = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [contentOffset, setContentOffset] = useState(0);

  const handleKeyboardDidShow = () => {
    setContentOffset(-60);
  };

  const handleKeyboardDidHide = () => {
    setContentOffset(0);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      handleKeyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const resetForm = () => {
    setEmail("");
    setName("");
    setPassword("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleRegister = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!validateName(name)) {
      Alert.alert(
        "Invalid Name",
        "Please enter a valid name (only alphabets and spaces allowed)."
      );
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert("Password should be at least 8 characters");
      return;
    }
    Alert.alert("Registration Success", "User registered successfully!");
    resetForm();
    console.log(`name: ${name}, email: ${email}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -249}
      style={styles.wrapper}
    >
      <ImageBackground
        source={require("../img/login-bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={[styles.container, { top: contentOffset }]}>
          <View style={styles.userPhoto}>
            <TouchableOpacity style={styles.addIcon}>
              <AddIcon width={30} height={30} fill={"#FF6C00"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.input}
              placeholder="Логін"
            ></TextInput>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Адреса електронної пошти"
              style={styles.input}
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
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginRef}>Вже є акаунт? <Text style={styles.loginRefLink}>Увійти</Text></Text>
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
    fontFamily:'Roboto',
    fontWeight: "500",
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
    flex: 1,
    position: "absolute",
    top: "36.5%",
    left: "78%",
  },
  showPasswordText: {
    fontFamily:'Roboto',
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
    fontFamily:'Roboto',
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginRef: {
    fontFamily:'Roboto',
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    color: "#1B4371",
  },
  loginRefLink: {
    textDecorationLine: "underline",
  }
});

export default RegistrationScreen;
