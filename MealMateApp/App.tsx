import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  const logo = require('./assets/logo/MealMateLogo1.jpg')
  const mealExample = require('./assets/meals/Meal1.jpeg')

  return (
    <View style={styles.modal}>
      <View style={styles.topBar}>
        <Image source={logo} style={styles.logo}/>
      </View>
      <View style={styles.content}>
      <View style={styles.image}>
      <Text>Spaghetti Bolognese</Text>
        <Image source={mealExample} style={styles.image2}/>
      </View>
      </View>
      <View style={styles.panel}>
      <View style={styles.button}><Text style={styles.buttonText}>No</Text></View>
      <View style={styles.button}><Text style={styles.buttonText}>Yes</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#ffddbe',
    flex: 1,
    display: 'flex'
  },
  topBar: {
    flex: 1,
    display: 'flex',
    maxHeight: 88,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  content: {
    flex: 1,
    display: 'flex',
  },
  logo: {
    width: 75,
    height: 75
  },
  image: {
    flex: 1,
    marginHorizontal: 30,
    borderColor: '#black',
    borderWidth: 1.5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowOffset: { width: 10, height: 10 },
    paddingVertical: 15,
    alignItems: 'center'
  },
  image2: {
    flex: 1,
    margin: 30,
    marginTop: 15,
    marginBottom: 175,
    borderColor: 'black',
    borderWidth: 0.75,
    maxHeight: '50%',
    maxWidth: '80%'

  },
  panel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-around',
    maxHeight: 88
  },
  button: {
    backgroundColor: '#7d575a',
    width: 90,
    height: 90,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  }
});

export default App;
