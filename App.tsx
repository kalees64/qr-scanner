import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Home from "./src/components/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import QRScanner from "./src/components/QRScanner";
import "./global.css";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <stack.Navigator initialRouteName="home">
              <stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
              />
              <stack.Screen
                name="scan"
                component={QRScanner}
                options={{ headerShown: false }}
              />
            </stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
