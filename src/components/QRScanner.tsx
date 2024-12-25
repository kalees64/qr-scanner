import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Prop = {
  type: any;
  data: any;
};

const QRScanner = ({ navigation }: { navigation: any }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      if (status !== "granted") {
        alert("Allow the camera permission!");
      }
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: Prop) => {
    setScanned(true);

    Alert.alert(
      `Scanning ${type} Result`,
      `Data: ${data}`,
      [
        {
          text: "OK",
          onPress: () => setScanned(false),
        },
      ],
      { cancelable: false }
    );
    navigation.goBack();
  };

  const handleBarCodeScanned2 = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    setQrData(data);

    try {
      const parsedData = JSON.parse(data);
      Alert.alert("Medicine Details", JSON.stringify(parsedData, null, 2));
    } catch (error) {
      Alert.alert("Scanned Data", data);
    }
  };

  if (!permission?.granted) {
    // Camera permissions are still loading or denied.
    return (
      <View className="flex-1 bg-[#D1F5EA] justify-center items-center ">
        <Text className=" font-semibold mb-6">
          Give the permission for camera
        </Text>
        <Button
          title="Give Permission"
          color="#139A74"
          onPress={requestPermission}
        />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#D1F5EA] ">
      <View className="h-3/6  rounded-e-[28px] overflow-hidden">
        <LinearGradient colors={["#19CB98", "#139A74"]} className="flex-1">
          <ImageBackground
            source={require("../assets/images/home-bg-img.png")}
            resizeMode="cover"
            className="flex-1"
            imageStyle={{ opacity: 0.35 }}
          >
            <View className="flex-1 p-4">
              <View className="w-full h-1/6 justify-center align-middle ">
                <Text className="text-5xl font-bold text-center text-white ">
                  MedScan
                </Text>
              </View>
              <View className="flex-1 justify-center">
                <ImageBackground
                  source={require("../assets/images/home-img-3.png")}
                  className="flex-1 justify-center items-center"
                  resizeMode="contain"
                >
                  <View className="size-72 bg-white rounded-2xl overflow-hidden">
                    <CameraView
                      style={{
                        flex: 1,
                      }}
                      onBarcodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                      }
                    ></CameraView>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
      <View className="flex-1 p-4 justify-center itens-center">
        <Pressable
          className="size-20 bg-[#139A74] mx-auto rounded-full justify-center items-center align-middle"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text className="text-center">
            <Ionicons name="chevron-back" size={24} color="white" />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  permissionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 5,
  },
  layerContainer: {
    flex: 1,
  },
  layerTop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  layerCenter: {
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  focused: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "#00FF00",
    borderRadius: 5,
  },
  layerRight: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  layerBottom: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  resultContainer: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#00FF00",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

//  <View
//    style={{
//      flex: 1,
//      alignItems: "center",
//      justifyContent: "space-between",
//      paddingVertical: 20,
//    }}
//  >
//    <View style={{ paddingTop: 10, borderRadius: 5, overflow: "hidden" }}>
//      <CameraView
//        style={styles.camera}
//        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
//      >
//        <View style={styles.layerContainer}>
//          <View style={styles.layerTop} />
//          <View style={styles.layerCenter}>
//            <View style={styles.layerLeft} />
//            <View style={styles.focused} />
//            <View style={styles.layerRight} />
//          </View>
//          <View style={styles.layerBottom} />
//        </View>
//      </CameraView>
//    </View>

//    <View
//      style={{
//        justifyContent: "center",
//        alignItems: "center",
//        paddingTop: 25,
//      }}
//    >
//      <View style={{ width: 150, gap: 5 }}>
//        <Button title="Back" onPress={() => navigation.goBack()} />
//      </View>
//    </View>
//  </View>;
