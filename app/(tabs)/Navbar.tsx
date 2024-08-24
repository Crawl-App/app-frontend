import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function Navbar() {
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
            <Image
              style={styles.group4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-6%3A1684?alt=media&token=0acd0cf9-91f9-4338-8a53-3691f3b5ed49",
              }}
            />
            <Text style={styles.startCrawl}>Start Crawl</Text>
          </View>
          <View style={styles.group7}>
            <Image
              style={styles.group6}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-6%3A1679?alt=media&token=0ff5d747-7f04-4596-a80b-0918d0bd0c9f",
              }}
            />
            <Text style={styles.joinCrawl}>Join Crawl</Text>
          </View>
          <View style={styles.group11}>
            <Image
              style={styles.group10}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-6%3A1689?alt=media&token=33c91aa2-8c67-4fdc-a80d-7d1c741a8dd7",
              }}
            />
            <Text style={styles.history}>History</Text>
          </View>
        </View>
        <Image
          style={styles.image9}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-120%3A444?alt=media&token=4fa06243-46b3-4358-ad15-8fd6092b8922",
          }}
        />
      </View>
      <Image
        style={styles.image6}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-117%3A46?alt=media&token=00b51de2-003d-4f03-b937-224573a364bd",
        }}
      />
      <Image
        style={styles.image7}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-117%3A47?alt=media&token=7ba27de4-b83f-4067-be16-9b03cf3c7757",
        }}
      />
      <Image
        style={styles.image8}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-120%3A464?alt=media&token=311c6e31-b63b-4ca7-9e16-3cf9f39e6b18",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: "relative",
    width: 358,
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
  startCrawl: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    textAlign: "center",
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
  group10: {
    width: 67,
    height: 6
  }
  ,
  image9: {
    width: 24,
    height: 24,
  },
  image6: {
    width: 24,
    height: 24,
  },
  image7: {
    width: 24,
    height: 24,
  },
  image8: {
    width: 24,
    height: 24,
  },
});