import React, { useState } from "react";

import { StyleSheet, Image, Text, View,TouchableOpacity } from "react-native";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
    // Here you can add functionality to handle the search query, such as API calls or navigation
  };
  return (
    <View style={styles.navbar}>
      <View style={styles.buscar}>
        <View style={styles.group2}>
          <View style={styles.search}></View>
          <Text style={styles.startingLocation}>Starting location</Text>
        </View>
        <View style={styles.agora}>
          <View style={styles.group1}>
            <Image
              style={styles.svgexport11}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-6%3A1667?alt=media&token=940b24d0-1f40-4fe2-9bed-b248e768e871",
              }}
            />
            <Text style={styles.now}>Now</Text>
            <Image
              style={styles.altchevronDown}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-6%3A1675?alt=media&token=7a5b16a2-eefb-4347-aded-dc223f9038ce",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.icons}>
        <View style={styles.group372}>
          <View style={styles.group5}>
          <TouchableOpacity onPress={() => alert('Start Crawl pressed')}>
            <Image
              style={styles.group4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-6%3A1684?alt=media&token=0acd0cf9-91f9-4338-8a53-3691f3b5ed49",
              }}
            />
            </TouchableOpacity>
            <Text style={styles.joinCrawl}>Start Crawl</Text>
          </View>
          <View style={styles.group5}>
          <TouchableOpacity onPress={() => alert('Start Crawl pressed')}>
            <Image
              style={styles.group4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-6%3A1679?alt=media&token=0ff5d747-7f04-4596-a80b-0918d0bd0c9f",
              }}
            />
           </TouchableOpacity>
            <Text style={styles.joinCrawl}>Join Crawl</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    left:0,
    width: "100%",
    height: 195,
    borderRadius: 24,
    backgroundColor: "rgba(246,194,91,1)",
    padding: 16,
  },
  buscar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(253,243,222,1)",
    borderRadius: 20,
    padding: 8,
  },
  group2: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    width: 24,
    height: 24,
    backgroundColor: "#ddd",
    marginRight: 10,
  },
  startingLocation: {
    color: "rgba(100,100,100,1)",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  agora: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(30,30,30,1)",
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  group1: {
    flexDirection: "row",
    alignItems: "center",
  },
  svgexport11: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  now: {
    color: "rgba(241,241,241,1)",
    fontSize: 16,
    lineHeight: 24,
  },
  altchevronDown: {
    width: 24,
    height: 24,
  },
  icons: {
    marginTop: 20,
  },
  group372: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  group5: {
    flexDirection: "column",
    alignItems: "center",
  },
  group4: {
    width: 67,
    height: 67,
    marginBottom: 8,
  },
  group7: {
    flexDirection: "column",
    alignItems: "center",
  },
  group6: {
    width: 67,
    height: 67,
    marginBottom: 8,
  },
  joinCrawl: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    textAlign: "center",
  },
  group11: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
  }
});
