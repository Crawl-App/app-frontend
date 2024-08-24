import React, { useState, useEffect } from 'react';
import MapView,{ Polyline } from 'react-native-maps';
import { Marker } from "react-native-maps";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Navbar from "./Navbar"; // Ensure this path is correct
import {decode} from "@mapbox/polyline"; //please install this package before running!
import * as Location from 'expo-location';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Geocoder from 'react-native-geocoding';

//works, give the route given the start and end location
const getDirections = async (startLoc: string, destinationLoc: string) => {
  try {
    const KEY = "AIzaSyAUWNMB5SpuGaA_PdfIW4VSbWxsUWvYCiI" //put your API key here.
    //otherwise, you'll have an 'unauthorized' error.
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    // console.log(points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1]
      };
    });
    return coords;
  } catch (error) {
    return error;
  }
};
export default function App() {
			let coordsList: any[] = [];  // Just a variable, no useState needed
			let markers: any[] = [];  // Just a variable, no useState needed
		  const [showRoute, setShowRoute] = useState(false); // State to control visibility when pressing the button

		  //both are to set up the initial location
		const initialLocation = {latitude: 37.771707, longitude: -122.4053769};
		const [myLocation, setMyLocation] = useState(initialLocation);

		/** might not be useful because we can get the location from the google autocomplete */
		  useEffect(() => {
			  _getLocation();
		  }, []);
	
		  
		  const _getLocation = async () => {
			  try {
			  let { status } = await Location.requestForegroundPermissionsAsync();
			  if (status !== 'granted') {
				  console.log('Permission to access location was denied');
				  return;
			  }
			  let location = await Location.getCurrentPositionAsync({});
			  setMyLocation(location.coords);
			  } catch (err) {
			  console.warn(err);
			  }
		  };
		  /**__________________________________________________________________ */


//starting location
	  const predefinedLocations = [
		//Tokyo
		{ latitude: 35.652832, longitude: 139.839478 },
		//Osaka
		{ latitude: 34.693737, longitude: 135.502165 },
		

		// Add more predefined locations here
	  ];

	  //starting location handling 
	  const handleButtonPress = (address,numberInput) => {
		setShowRoute(true);
	  
		/*Geocoder.from(address)
		.then(json => {
			var location = json.results[0].geometry.location;
			console.log(location);
			predefinedLocations.pop();
			predefinedLocations.push({latitude: location.lat, longitude: location.lng});
		})
		.catch(error => console.warn(error));*/
	

//search for the path given the starting location
	 /* const fetchPubCrawlRoute = async () => {
		try {
		  const response = await fetch('https://crawl-nine.vercel.app/find_pub_crawl', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  coordinates: [predefinedLocations[0].latitude, predefinedLocations[0].longitude],
			  length: 2,
			  use_current_loc: false,
			}),
		  });
	
		  const data = await response.json();
	
		  const routeCoordinates = data.route[0].map(loc => ({
			latitude: loc[1],
			longitude: loc[2],
		  }));
		  
		  console.log(routeCoordinates);
		  coordsList = routeCoordinates;
			console.log("Updated Coords List:", coordsList);
		  markers = routeCoordinates;
		  console.log(coordsList);
		  console.log(markers);
		} catch (error) {
		  console.error("Error fetching route:", error);
		}
	  };
	  fetchPubCrawlRoute();
	  */
	  
	//get the routes between the locations
			coordsList = predefinedLocations;
			const fetchAllDirections = async () => {
			  const allCoords = [];
			  const allMarkers = [];
		
			  for (let i = 0; i < coordsList.length - 1; i++) {
				const startLoc = coordsList[i];
				const destinationLoc = coordsList[i + 1];
				const directions = await getDirections(
				  `${startLoc.latitude},${startLoc.longitude}`,
				  `${destinationLoc.latitude},${destinationLoc.longitude}`
				);
				allCoords.push(directions);
				allMarkers.push(startLoc);
			  }
			  allMarkers.push(coordsList[coordsList.length - 1]);

			};
			fetchAllDirections();
		};
	  
		//show the map
	return (
     <View style={{ flex: 1 }}>
          <MapView style={StyleSheet.absoluteFill} customMapStyle={mapStyle} >
            
          {coordsList.map((coords, index) => {
  // Ensure you only create a Polyline if there's a next coordinate to connect to
  if (index < coordsList.length - 1) {
    const segment = [coords, coordsList[index + 1]]; // Create a segment from this point to the next point
    return (
      <Polyline
          key={`polyline-${index}`}
          coordinates={segment} // Pass the segment (two points) as coordinates
          strokeColor="red"
          strokeWidth={4}
        />
    );
  }
  return null; // No polyline for the last point
})}

          {markers.map((marker, index) => (
          <Marker
              key={`marker-${index}`}
              coordinate={marker}
              pinColor={index === 0 ? 'green' : (index === markers.length - 1 ? 'red' : 'blue')}
          />
          ))}
</MapView>
          <TouchableOpacity style={styles.profileIconContainer}>
              <Image
                  source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/c9nobwyzi35-6%3A1699?alt=media&token=a54c2b0c-4c49-4daf-92d8-fb10c27bcfb6' }} // Replace with your profile image URL
                  style={styles.profileIcon}
              />
          </TouchableOpacity>
          <Navbar onPress={handleButtonPress} />
        </View>
    );
}
const mapStyle =
		[
			{
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#ebe3cd"
				}
			  ]
			},
			{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#523735"
				}
			  ]
			},
			{
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#f5f1e6"
				}
			  ]
			},
			{
			  "featureType": "administrative",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "administrative",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#c9b2a6"
				}
			  ]
			},
			{
			  "featureType": "administrative.land_parcel",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#dcd2be"
				}
			  ]
			},
			{
			  "featureType": "administrative.land_parcel",
			  "elementType": "labels",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "administrative.land_parcel",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#ae9e90"
				}
			  ]
			},
			{
			  "featureType": "landscape.natural",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#dfd2ae"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#dfd2ae"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#93817c"
				}
			  ]
			},
			{
			  "featureType": "poi.attraction",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi.business",
			  "stylers": [
				{
				  "weight": 2
				}
			  ]
			},
			{
			  "featureType": "poi.business",
			  "elementType": "labels",
			  "stylers": [
				{
				  "weight": 2
				}
			  ]
			},
			{
			  "featureType": "poi.business",
			  "elementType": "labels.icon",
			  "stylers": [
				{
				  "weight": 2
				}
			  ]
			},
			{
			  "featureType": "poi.government",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi.medical",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi.medical",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "geometry.fill",
			  "stylers": [
				{
				  "color": "#a5b076"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#447530"
				}
			  ]
			},
			{
			  "featureType": "poi.place_of_worship",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi.school",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi.sports_complex",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#f5f1e6"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "labels.icon",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "road.arterial",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#fdfcf8"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#f8c967"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#e9bc62"
				}
			  ]
			},
			{
			  "featureType": "road.highway.controlled_access",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#e98d58"
				}
			  ]
			},
			{
			  "featureType": "road.highway.controlled_access",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#db8555"
				}
			  ]
			},
			{
			  "featureType": "road.local",
			  "elementType": "labels",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "road.local",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#806b63"
				}
			  ]
			},
			{
			  "featureType": "transit",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "transit.line",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#dfd2ae"
				}
			  ]
			},
			{
			  "featureType": "transit.line",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#8f7d77"
				}
			  ]
			},
			{
			  "featureType": "transit.line",
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#ebe3cd"
				}
			  ]
			},
			{
			  "featureType": "transit.station",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#dfd2ae"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "geometry.fill",
			  "stylers": [
				{
				  "color": "#b9d3c2"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#92998d"
				}
			  ]
			}

	  ]
// need to put it on firebasestorage but no idea
const styles = StyleSheet.create({
	profileIconContainer: {
		position: 'absolute',
		top: 15,
		right: 15,
	},
	profileIcon: {
		width: 45,
		height: 45,
		borderRadius: 25, // Makes the icon circular
		borderWidth: 2,
		borderColor: '#fff', // Optional: add a border for better visibility
	},
});