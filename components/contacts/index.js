import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Ionicons from '@expo/vector-icons/Ionicons'


class Services extends Component {
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
                <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}>SERVICES</Text>
            </View>
          </View>

          <ScrollView>
            <View style={{marginTop:20, flex: 1, justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={styles.Card_1}>
                <TouchableOpacity style={{alignItems:'center', paddingTop:10, justifyContent:'center', backgroundColor:'white', flex:1}}>
                  <FontAwesome name="fire-extinguisher" style={{fontSize:80, marginBottom:20, color:'#4ca6da'}} />
                  <Text style={{fontSize:16, color:'gray', fontWeight:'500'}}>Sapeur pompier</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.Card_1}>
                <TouchableOpacity style={{alignItems:'center', paddingTop:10, justifyContent:'center', backgroundColor:'white', flex:1}}>
                  <FontAwesome5 name="briefcase-medical" style={{fontSize:80, marginBottom:20, color:'#4ca6da'}} />
                  <Text style={{fontSize:16, color:'gray', fontWeight:'500'}}>Urgence</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.Card_1}>
                <TouchableOpacity style={{alignItems:'center', paddingTop:10, justifyContent:'center', backgroundColor:'white', flex:1}}>
                  <FontAwesome5 name="briefcase-medical" style={{fontSize:80, marginBottom:20, color:'#4ca6da'}} />
                  <Text style={{fontSize:16, color:'gray', fontWeight:'500'}}>Police</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.Card_1}>
                <TouchableOpacity style={{alignItems:'center', paddingTop:10, justifyContent:'center', backgroundColor:'white', flex:1}}>
                  <Ionicons name="ios-water" style={{fontSize:80, marginBottom:20, color:'#4ca6da'}} />
                  <Text style={{fontSize:16, color:'gray', fontWeight:'500'}}>SDE</Text>
                </TouchableOpacity>
              </View>
              
            </View>

          </ScrollView>
        </View>
        );
    }
}
export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },

  Card_1:{
    shadowColor: '#000', 
    shadowOffset: { width: 1, height: 1 },  
    elevation: 3, 
    shadowOpacity: 0.22,  
    backgroundColor:'white',
    borderRadius:5,
    width:150,
    height: 150,
    marginHorizontal:15,
    marginBottom: 30
}

});
