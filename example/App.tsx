import { BlurFilter } from "expo-ios-blur-filter";
import { SafeAreaView, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <BlurFilter amount={5} style={{ flex: 1 }}>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1742317366931-686693770441?q=80&w=2433&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 200, height: 200 }}
          />
        </BlurFilter>
        <BlurFilter amount={8} style={{ flex: 1 }}>
          <View
            style={{ width: 120, height: 120, backgroundColor: "purple" }}
          />
        </BlurFilter>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
};
