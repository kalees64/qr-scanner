import React from "react";
import { Button, Text, View } from "react-native";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          paddingVertical: 5,
          paddingHorizontal: 10,
          textAlign: "center",
          shadowColor: "black",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        }}
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
          <Button title="Scan QR" onPress={() => navigation.navigate("scan")} />
        </View>
      </View>
    </View>
  );
};

export default Home;
