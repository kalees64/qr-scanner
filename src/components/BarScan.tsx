import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const MedicineQRReader = () => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState(false);
  const barCodeScannerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: any; data: any }) => {
    setScanned(true);
    // Handle the scanned data here
    console.log("Type: " + type + "\nData: " + data);
    // Example: Parse data (assuming JSON format)
    try {
      const medicineData = JSON.parse(data);
      // Access medicine information (e.g., name, dosage, expiry)
      console.log("Medicine Name:", medicineData.name);
      // ... further processing
    } catch (error) {
      console.error("Error parsing data:", error);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
        ref={barCodeScannerRef}
      />
      {scanned && (
        <View style={styles.bottomContainer}>
          <Text style={styles.text}>Scanned!</Text>
          <TouchableOpacity onPress={() => setScanned(false)}>
            <Text style={styles.button}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    color: "#fff",
    marginTop: 10,
  },
});

export default MedicineQRReader;
