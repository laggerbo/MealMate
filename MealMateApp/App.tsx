import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <View style={styles.modal}>
      <View style={styles.image}>
        <View style={styles.image2}></View>
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
    height: '100%',
    display: 'flex'
  },
  image: {
    flex: 1,
    margin: 30,
    borderColor: '#7d575a',
    borderWidth: 1.5,
    backgroundColor: 'white'
  },
  image2: {
    flex: 1,
    margin: 25,
    marginBottom: 125,
    borderColor: '#7d575a',
    borderWidth: 1.5,
    backgroundColor: '#ffddbe'
  },
  panel: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
    marginBottom: 20
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
