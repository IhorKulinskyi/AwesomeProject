import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import AddIcon from "../assets/addIcon.svg";

const RegistrationScreen = () => {
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
          <View style={styles.userPhoto}>
            <TouchableOpacity style={styles.addIcon}>
              <AddIcon width={30} height={30} fill={"#FF6C00"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Логін"></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            ></TextInput>
            <TextInput style={styles.input} placeholder="Пароль"></TextInput>
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
