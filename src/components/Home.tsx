import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";

const Home = ({ navigation }: { navigation: any }) => {
  const navigateToScanner = () => {
    navigation.navigate("scan");
  };

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
                <Pressable
                  className=" mx-auto rounded-2xl"
                  onPress={navigateToScanner}
                >
                  <Image
                    source={require("../assets/images/home-img-3.png")}
                    className="mx-auto"
                  />
                </Pressable>
              </View>
              <Text className="text-center font-semibold text-white">
                Click QR to scan
              </Text>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
      <View className="flex-1 p-4 justify-center align-middle">
        <Image
          source={require("../assets/images/home-img-1.png")}
          className="w-10/12 h-5/6 mx-auto"
        />
      </View>
    </View>
  );
};

export default Home;

{
  /* <View style={{ flex: 1 }} className="bg-white">
  <Text
    style={{
      paddingVertical: 5,
      paddingHorizontal: 10,
      textAlign: "center",
      shadowColor: "black",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    }}
    className="text-2xl font-bold bg-white shadow"
  >
    QR SCANNER
  </Text>
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 25,
    }}
  >
    <View style={{ width: 150, gap: 5 }}>
      <Pressable
        onPress={() => navigation.navigate("scan")}
        className="cursor-pointer"
      >
        <Text className="border bg-green-400 border-green-400 text-center font-semibold p-2 rounded shadow">
          Scan Now
        </Text>
      </Pressable>
    </View>
  </View>
</View>; */
}
