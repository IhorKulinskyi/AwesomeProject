import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
  } from "react-native";
  import {
    Ionicons,
    AntDesign,
    MaterialIcons,
    Feather,
  } from "@expo/vector-icons";
  
  const CreatePostsScreen = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.wrapper}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -249}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.arrowBackIcon}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.postsTitle}>Створити публікацію</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.photoPlace}>
                <TouchableOpacity style={styles.photoIconWrapper}>
                  <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
              <Text style={styles.photoPlaceCaption}>Завантажте фото</Text>
              <View style={styles.photoInputGroup}>
                <TextInput
                  style={styles.input}
                  placeholder="Назва..."
                ></TextInput>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={[styles.input, { paddingLeft: 28 }]}
                    placeholder="Місцевість..."
                  ></TextInput>
                  <Feather
                    style={styles.mapPinIcon}
                    name="map-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Опубліковати</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.deleteIconWrapper}>
                <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    header: {
      paddingTop: 50,
      paddingBottom: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 0.5,
      borderBottomColor: "#0000004D",
    },
    postsTitle: {
      flex: 0.9,
      textAlign: "center",
      fontFamily: "Roboto",
      fontWeight: "500",
      fontSize: 17,
      lineHeight: 22,
      letterSpacing: -0.4,
      color: "#212121",
    },
    arrowBackIcon: {
      marginRight: -48,
    },
    mainContent: {
      flex: 1,
      flexDirection: "column",
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    photoPlace: {
      width: "100%",
      height: 240,
      backgroundColor: "#E8E8E8",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      marginBottom: 5,
    },
    photoIconWrapper: {
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    },
    photoPlaceCaption: {
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 19,
      color: "#BDBDBD",
      marginBottom: 20,
    },
    photoInputGroup: {
      gap: 10,
      marginBottom: 40,
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: "#E8E8E8",
      width: "100%",
      paddingVertical: 10,
    },
    inputWrapper: {
      width: "100%",
      position: "relative",
    },
    mapPinIcon: {
      position: "absolute",
      left: 0,
      top: "20%",
    },
    button: {
      width: "100%",
      backgroundColor: "#F6F6F6",
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 32,
      paddingRight: 32,
      borderRadius: 100,
      alignItems: "center",
      marginBottom: 24,
    },
    buttonText: {
      color: "#BDBDBD",
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 18,
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 80,
      paddingBottom: 20,
      paddingTop: 10,
    },
    deleteIconWrapper: {
      borderRadius: 25,
      backgroundColor: "#F6F6F6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
  });
  
  export default CreatePostsScreen;
