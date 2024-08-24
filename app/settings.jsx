import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            {/* Add your settings options here */}
            <TouchableOpacity
                style={styles.settingsCard}
                onPress={() => alert("Start Crawl pressed")}
            >
                <Text> Profile </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.settingsCard}
                onPress={() => alert("Start Crawl pressed")}
            >
                <Text> History</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.settingsCard}
                onPress={() => alert("Start Crawl pressed")}
            >
                <Text> Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.settingsCard}
                onPress={() => alert("Start Crawl pressed")}
            >
                <Text> Logout </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    settingsCard: {
        maxHeight: 150,
        width: "100%",
        borderWidth: 2,
        padding: 10,
        margin: 5,
        borderRadius: 10,

        display: "flex",
        flexDirection: "row",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
});
