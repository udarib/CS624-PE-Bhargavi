import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
export default class App extends Component  {
    render() {
        return (
            // Outer container to center the card on screen
            <View style={styles.container}> 
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image
                            style={styles.cardImage}
                            source={require('../../assets/images/user.png')}
                        />
                    </View>
                    <Text style={styles.cardName}>Akarsh Lakshmana</Text>
                    <Text style={styles.cardTitle}>React Native Developer</Text>
                    <Text style={styles.cardDescription}>
                        Akarsh is a really great JavaScript developer. He loves using JS to
                        build React Native applications for iOS and Android.
                    </Text>
                </View>
            </View>
        );
    }
}
// Define theme color for the profile card background
const profileCardColor = 'dodgerblue';
// Styling for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        padding: 20
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 10,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        marginVertical: 5,
        textDecorationLine: 'underline'
    },
    cardDescription: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 10
    }
});
