import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Profil extends Component {
    constructor(props) {
        super(props)
      }

      
 render() {

    return (
        <View style={styles.container}>
            <Text>Profil</Text>
        </View>
        );
    }
}
export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
