import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Navbar from "./Navbar"; // Ensure this path is correct

export default function App() {
	const mapStyle = [
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
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#dfd2ae"
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
		  "featureType": "road",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#f5f1e6"
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
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#806b63"
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
	return (
		
		<View style={{ flex: 1 }}>
			
			<MapView style={StyleSheet.absoluteFill} customMapStyle={mapStyle}  />
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

const styles = StyleSheet.create({
	profileIconContainer: {
		position: 'absolute',
		top: 60,
		right: 30,
	},
	profileIcon: {
		width: 60,
		height: 60,
		borderRadius: 25, // Makes the icon circular
		borderWidth: 2,
		borderColor: '#fff', // Optional: add a border for better visibility
	},
});
