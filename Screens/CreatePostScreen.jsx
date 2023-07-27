import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const CreatePostsScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(undefined);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  const handlePost = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setName("");
    setPhoto(undefined);
    navigation.navigate("Home");
  };

  if (hasCameraPermission === false) {
    Alert.alert("Accsess to camera denied");
  }

  let photoView;

  if (!photo) {
    photoView =
      hasCameraPermission === undefined ? (
        <View style={styles.photoPlace}>
          <TouchableOpacity style={styles.photoIconWrapper}>
            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      ) : (
        <Camera style={styles.photoPlace} ref={setCameraRef} type={type}>
          <TouchableOpacity
            style={styles.photoIconWrapper}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
                setPhoto(uri);
              }
            }}
          >
            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flipIcon}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <MaterialIcons name="flip-camera-android" size={30} color="white" />
          </TouchableOpacity>
        </Camera>
      );
  } else {
    photoView = <Image style={styles.photoPlace} source={{ uri: photo }} />;
  }

  function getPostButtonStyle() {
    const state = photo && name;
    if (!state) {
      return { backGroundColor: "#F6F6F6", textColor: "#BDBDBD" };
    }

    return { backGroundColor: "#FF6C00", textColor: "#FFF" };
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -249}
      >
        <View style={styles.container}>
          <View style={styles.mainContent}>
            {photoView}
            <Text style={styles.photoPlaceCaption}>
              {photo ? "Редагувати фото" : "Завантажте фото"}
            </Text>
            <View style={styles.photoInputGroup}>
              <TextInput
                value={name}
                style={styles.input}
                placeholder="Назва..."
                onChangeText={setName}
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
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: `${getPostButtonStyle().backGroundColor}` },
              ]}
              onPress={handlePost}
            >
              <Text
                style={[
                  styles.buttonText,
                  { color: `${getPostButtonStyle().textColor}` },
                ]}
              >
                Опубліковати
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.deleteIconWrapper}
              onPress={() => {
                setPhoto(undefined);
                setName("");
              }}
            >
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
    backgroundColor: "#FFF",
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
    position: "relative",
  },
  photoIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  flipIcon: {
    position: "absolute",
    right: 5,
    bottom: 5,
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
    // display: "flex",
    // justifyContent: "center",
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
