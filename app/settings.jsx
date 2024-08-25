import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

export default function SettingsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const pubCrawlHistory = [
    {
      date: "2024-08-01",
      stops: ["Old Mate's Place", "Baxter Inn", "Shark Bar"],
    },
    {
      date: "2024-07-25",
      stops: [
        "Hotel Steyne",
        "In Situ",
        "New Brighton Hotel",
        "Hemingway's Manly",
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity
        style={styles.settingsCard}
        onPress={() => alert("Profile pressed")}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsCard}
        onPress={() => setModalVisible(true)}
      >
        <Text>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsCard}
        onPress={() => alert("Account Settings pressed")}
      >
        <Text>Account Settings</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.settingsCard}
        onPress={() => alert("Logout pressed")}
      >
        <Text>Logout</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.googleSignInButton}
        onPress={() => alert("Sign in with Google pressed")}
      >
        <Image
          source={require("../assets/sign-in-w-google.png")}
          style={styles.googleSignInImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Modal for Pub Crawl History */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Pub Crawl History</Text>
            <ScrollView style={styles.modalContent}>
              {pubCrawlHistory.map((crawl, index) => (
                <View key={index} style={styles.historyEntry}>
                  <Text style={styles.crawlTitle}>
                    Crawl on {crawl.date}: {crawl.stops.length} stops
                  </Text>
                  {crawl.stops.map((stop, stopIndex) => (
                    <Text key={stopIndex} style={styles.stopText}>
                      Stop {stopIndex + 1}: {stop}
                    </Text>
                  ))}
                </View>
              ))}
            </ScrollView>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  googleSignInButton: {
    width: "100%",
    borderWidth: 2,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  googleSignInImage: {
    width: "100%",
    height: 40, // TODO: adjust if this looks shite
  },
});
