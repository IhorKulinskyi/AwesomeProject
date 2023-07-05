import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
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
        <Text>Вже є акаунт? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom:48,
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
    marginBottom:24,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
  },
  logIn: {},
});

export default RegistrationScreen;
