import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => (
	<Stack>
		<Stack.Screen name="index" options={{ title: 'App' }} />
	</Stack>
);

export default Layout;

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! v2</Text>s
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/