import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Home from './home/index'
import Contacts from './contacts/index'
import Position from './position/index'
import Profil from './profil/index'
import Parametres from './parametres/index'


const HomeStack = createStackNavigator({
    Home: { screen: Home, navigationOptions: {headerBackTitle: null}}
  })

const ContactsStack = createStackNavigator({
    Contacts: { screen: Contacts},
  })

const PositionStack = createStackNavigator({
    Position: { screen: Position},
})

const ProfilStack = createStackNavigator({
    Profil: { screen: Profil},
})

const ParametresStack = createStackNavigator({
    Parametres: { screen: Parametres},
})


const DashboardTabNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeStack , 
            navigationOptions: {
            tabBarLabel:"Home",
            tabBarIcon: ({ tintColor }) => ( <FontAwesome name="home" size={22} color={tintColor} />),
            tabBarOptions: { activeTintColor:'#5da6ef'}
          },
        },
        Contacts: { screen: ContactsStack, 
          navigationOptions: {
          tabBarLabel:"Services",
          tabBarIcon: ({ tintColor }) => ( <FontAwesome name="users" size={22} color={tintColor} />),
          tabBarOptions: { activeTintColor:'#5da6ef'}
        },
      },
       
        Position: { screen: PositionStack, 
            navigationOptions: {
            tabBarLabel:"Position",
            tabBarIcon: ({ tintColor }) => ( <FontAwesome name="map-marker" size={22} color={tintColor} />),
            tabBarOptions: { activeTintColor:'#5da6ef'}
          },
        },

        // Profil: { screen: ProfilStack, 
        //     navigationOptions: {
        //     tabBarLabel:"Profil",
        //     tabBarIcon: ({ tintColor }) => ( <AntDesign name="warning" size={22} color={tintColor} />),
        //     tabBarOptions: { activeTintColor:'#5da6ef'}
        //   },
        // },

        Parametres: { screen: ParametresStack, 
          navigationOptions: {
          tabBarLabel:"Parametres",
          tabBarIcon: ({ tintColor }) => ( <AntDesign name="setting" size={22} color={tintColor} />),
          tabBarOptions: { activeTintColor:'#5da6ef'}
        },
      }
  },
  {
    navigationOptions:({navigation})=> {
      const {routeName} = navigation.state.routes
      [navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
)
const AppContainer = createAppContainer(DashboardTabNavigator);

export default AppContainer;
