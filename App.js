import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { store } from './src/redux-shop';
import { Provider } from 'react-redux';

let HomeStack = createStackNavigator();

let HomeDrawerNavigator = createDrawerNavigator();

import Home from './src/views/Home';
import Category from './src/views/Category';
import ProductDetail from './src/views/ProductDetail';
import Basket from './src/views/Basket';
import Shipping from './src/views/Shipping';
import Account from './src/views/Account';
import Register from './src/views/Register';
import Terms from './src/views/Terms';

import Icon from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <HomeDrawerNavigatorScreen></HomeDrawerNavigatorScreen>
    </NavigationContainer>
    </Provider>
    
  );
}

const screenOptions = ({ navigation }) => ({
  headerShown: true,
  headerTitleStyle: {
    color: 'white'
  },
  headerTitle: navigation.name,
  headerStyle: {
    backgroundColor: 'orange'
  },
  headerLeft: () => (
    <Icon name="md-menu" color="white" size={30} style={{ paddingLeft: 15 }} onPress={() => navigation.openDrawer()} />
  ),

  headerRight: () => (
    <Text style={{ color: 'white', paddingRight: 15, fontSize: 20 }}>TRENDZ</Text>
  )
})

function DrawerContent(props) { //myNote: for fixing the issue of not going to Home(drawer) by pressing it if you are in detail or category.
  return (
    <DrawerContentScrollView style={{ backgroundColor: 'White', color: 'white' }}>
      <DrawerItem label={() => (<Text style={{ color: 'grey', fontSize: 18, borderWidth: '1px', borderColor:'orange', padding:15, borderRadius:8 }}>Home</Text>)} onPress={() => props.navigation.navigate('Home', { screen: 'Home' })} />
      
      <DrawerItem label={() => (<Text style={{ color: 'grey', fontSize: 18, borderWidth: '1px', borderColor:'orange', padding:15, borderRadius:8 }}>Account</Text>)} onPress={() => props.navigation.navigate('Account', { screen: 'Home' })} />
      
      <DrawerItem label={() => (<Text style={{color: 'grey', fontSize: 18, borderWidth: '1px', borderColor:'orange', padding:15, borderRadius:8 }}>Shipping</Text>)} onPress={() => props.navigation.navigate('Shipping', { screen: 'Shipping' })} />



      <DrawerItem label={() => (<Text style={{ color: 'grey', fontSize: 18, borderWidth: '1px', borderColor: 'orange', padding: 15, borderRadius: 8 }}>Terms & Condition</Text>)} onPress={() => props.navigation.navigate('Terms & Conditions', { screen: 'Terms & Conditions' })} />
    </DrawerContentScrollView>
  )
}


function HomeDrawerNavigatorScreen() {
  return (
    <HomeDrawerNavigator.Navigator screenOptions={screenOptions}
      drawerContent={DrawerContent}
    >
      <HomeDrawerNavigator.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }}/>
      <HomeDrawerNavigator.Screen name="Account" component={Account} />
      <HomeDrawerNavigator.Screen name="Shipping" component={Shipping} />
      <HomeDrawerNavigator.Screen name="Terms & Conditions" component={Terms} />
    </HomeDrawerNavigator.Navigator>
  )
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Category" component={Category} />
      <HomeStack.Screen name="ProductDetail" component={ProductDetail} />
      <HomeStack.Screen name="Basket" component={Basket} />
      <HomeStack.Screen name="Shipping" component={Shipping} />
      <HomeStack.Screen name="Register" component={Register} />
      <HomeStack.Screen name="Terms & Conditions" component={Terms} />
      <HomeStack.Screen name="Login" component={Account} />
    </HomeStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
