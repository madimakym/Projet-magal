import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'


class Home extends Component {
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
                <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}>ACCUEIL</Text>
                <TouchableOpacity style={{position:'absolute', right:0, top:10}}>
                  <FontAwesome name="camera" size={22} color="black" />
                </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
              <Image source={require('../img/qrcode.png')} style={{width: 300, height: 300, resizeMode: 'stretch'}}/>
          </View>
        </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
