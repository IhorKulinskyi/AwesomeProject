import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { data } = route.params;
  const { name, coords, title } = data;
  const { latitude, longitude } = coords;
  return (
    <View>
      <MapView
        style={styles.mapStyle}
        region={coords}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker
          title={name}
          coordinate={{ latitude, longitude }}
          description={title}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
