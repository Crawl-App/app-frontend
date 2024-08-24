import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app! v2</Text>
            <StatusBar style="auto" />
            <Tabs>
                <Tabs.Screen name="index" options={{ title: "Home" }} />
                <Tabs.Screen name="settings" options={{ title: "Settings" }} />
                <Tabs.Screen name="profile" options={{ title: "Profile" }} />
            </Tabs>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        border: "10px",
    },
});
