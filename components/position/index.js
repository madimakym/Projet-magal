import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'


class Position extends Component {
    constructor(props) {
        super(props)
      }

    static navigationOptions = function(props) {
      return {
        headerTransparent: true
      }
    }
      
 render() {

    return (
        <View style={styles.container}>
          <View style={{marginTop:80}}>
            <View style={{flexDirection:'row', borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:5}}>
                <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}>POSITION</Text>
            </View>
          </View>
        </View>
        );
    }
}
export default Position;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
});
