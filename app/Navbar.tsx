import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons/faRoute'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, Text, TouchableOpacity, Animated, StyleSheet, TextInput} from 'react-native';

export default function Navbar({onPress}: {onPress: (searchQuery,numberInput) => void}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [numberInput, setNumberInput] = useState("");
  
  return (
    <View style={styles.navbarContainer}>
    <View style={styles.navbar}>

    <GooglePlacesAutocomplete 
              placeholder='Search'
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                setSearchQuery(data.id);
              }}
              query={{
                key: 'AIzaSyAUWNMB5SpuGaA_PdfIW4VSbWxsUWvYCiI',
                language: 'en',
              }}
              currentLocation={false}
            
            />
            
      <View style={styles.icons}>
        
        <View style={styles.group372}>
              
          <TouchableOpacity style={styles.mainButton} onPress={() => onPress(searchQuery,numberInput)}>
            <FontAwesomeIcon style={styles.mainButtonIcons} size={25} icon={faRoute} />
            <Text style={styles.joinCrawl}>Start Crawl</Text>
            </TouchableOpacity>
          
            <TextInput
                    style={styles.inputBox}
                    placeholder="0"
                    keyboardType="numeric"
                    value={numberInput}
                    onChangeText={setNumberInput}
                />
          <TouchableOpacity style={styles.mainButton} onPress={() => alert('Start Crawl pressed')}>
            <FontAwesomeIcon style={styles.mainButtonIcons} size={25} icon={faUserGroup} />
            <Text style={styles.joinCrawl}>Join Crawl</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>

  );
}
      // <View style={styles.buscar}>
      //   <View style={styles.group2}>
      //     <View style={styles.search}></View>
      //     // <Text style={styles.startingLocation}>Starting location</Text>
      //   </View>
      //   <View style={styles.agora}>
      //     <View style={styles.group1}>
      //       <ImagejustifyContent: 'center', alignItems: 'center'}
      //         style={styles.svgexport11}
      //         source={{
      //           uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-6%3A1667?alt=media&token=940b24d0-1f40-4fe2-9bed-b248e768e871",
      //         }}
      //       />
      //       <Text style={styles.now}>Now</Text>
      //       <Image
      //         style={styles.altchevronDown}
      //         source={{
      //           uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/r4hnhe1wgz-6%3A1675?alt=media&token=7a5b16a2-eefb-4347-aded-dc223f9038ce",
      //         }}
      //       />
      //     </View>
      //   </View>
      // </View>

const styles = StyleSheet.create({
  navbarContainer: {
    position: "absolute",
    bottom: 0,
    // padding: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 30,
    width: "100%",
    maxHeight: "60%",
    alignItems: 'center',
  },
  navbar: {
    // width: "100%",
    height: 195,
    maxHeight: 300,
    maxWidth: 600,
    width: "100%",
    borderRadius: 24,
    backgroundColor: "rgba(246,194,91,1)",
    padding: 15,
    justifyContent: "flex-end",
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
  inputBox: {
    width: 50,
    height: 40,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
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
  mainButton: {
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    maxWidth: 200,
    minHeight: 70,
    borderRadius: 25,
    backgroundColor: "white",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,


  },
  mainButtonIcons: {
    paddingRight: 40,
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