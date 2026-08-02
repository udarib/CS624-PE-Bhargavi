import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import update from 'immutability-helper'; 
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native'; 
// Import user image
const userImage = require('../../assets/images/user.png');
// Create an array of 8 profile card data objects with identical info
const data = Array(8).fill({
  image: userImage,
  name: 'John Doe',
  occupation: 'React Native Developer',
  description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
  showThumbnail: true
});
// Functional component to render each profile card
const ProfileCard = ({ image, name, occupation, description, onPress, showThumbnail }) => {
  let containerStyles = [styles.cardContainer];
  if (showThumbnail) containerStyles.push(styles.cardThumbnail);
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};
// Define prop types for ProfileCard to ensure type safety
ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }
  // Toggle thumbnail view for a profile card when pressed
  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, { [index]: { showThumbnail: { $set: showThumbnail } } })
    });
  };
  render() {
    const list = this.state.data.map((item, index) => (
      <ProfileCard
        key={'card-' + index}
        {...item}
        onPress={() => this.handleProfileCardPress(index)}
      />
    ));
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {list}
      </ScrollView>
    );
  }
}
const profileCardColor = 'dodgerblue';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    margin: 10,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    }),
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
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    }),
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: { height: 2, width: 2 },
    textShadowRadius: 3
  },
  cardOccupationContainer: {
    borderBottomWidth: 3,
    borderColor: 'black',
    marginVertical: 10,
  },
  cardOccupation: {
    fontWeight: 'bold',
  },
  cardDescription: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: 20
  },
  cardThumbnail: {
    transform: [{ scale: 0.3 }] // Thumbnail scaling effect
  },
});
