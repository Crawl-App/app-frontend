import React, { useState, useEffect } from 'react';
import MapView,{ Polyline } from 'react-native-maps';
import { Marker } from "react-native-maps";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Navbar from "./Navbar"; // Ensure this path is correct
import {decode} from "@mapbox/polyline"; //please install this package before running!


  const getDirections = async (startLoc, destinationLoc) => {
	try {
	  const KEY = "AIzaSyAUWNMB5SpuGaA_PdfIW4VSbWxsUWvYCiI" //put your API key here.
	  //otherwise, you'll have an 'unauthorized' error.
	  let resp = await fetch(
		`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
	  );
	  let respJson = await resp.json();
	  let points = decode(respJson.routes[0].overview_polyline.points);
	  console.log(points);
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
	  const [coords, setCoords] = useState([]);
	  const tokyoRegion = {
		latitude: 35.6762,
		longitude: 139.6503,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	  };
	  const chibaRegion = {
		latitude: 35.6074,
		longitude: 140.1065,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	  };

	  useEffect(() => {
		//fetch the coordinates and then store its value into the coords Hook.
		getDirections(tokyoRegion.latitude + "," + tokyoRegion.longitude, chibaRegion.latitude + "," + chibaRegion.longitude)
		  .then(coords => setCoords(coords))
		  .catch(err => console.log("Something went wrong"));
	  }, []);
	return (

		<View style={{ flex: 1 }}>

			<MapView style={StyleSheet.absoluteFill} customMapStyle={mapStyle} initialRegion={tokyoRegion}>
			  <Polyline
        coordinates={coords} //specify our coordinates
        strokeColor={"blue"}
        strokeWidth={3}

      />
			<Marker coordinate={tokyoRegion} image={{uri:'https://imgur.com/a/pKaDmKM'}} />
			<Marker coordinate={chibaRegion} pinColor='yellow' />
</MapView>
			<TouchableOpacity style={styles.profileIconContainer}>
				<Image
					source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/c9nobwyzi35-6%3A1699?alt=media&token=a54c2b0c-4c49-4daf-92d8-fb10c27bcfb6' }} // Replace with your profile image URL
					style={styles.profileIcon}
				/>
			</TouchableOpacity>
			<Navbar />
		</View>
	);
}
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
