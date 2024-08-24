import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Navbar from "./Navbar"; // Ensure this path is correct

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<MapView style={StyleSheet.absoluteFill} />
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
