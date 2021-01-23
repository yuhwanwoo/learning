import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Button, Image} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IconButton, Colors } from 'react-native-paper';

import {Header,Right,Left, Container, Thumbnail} from 'native-base'

function SettingsScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen1</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile2')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <Container >
      <Header style={styles.test_nav}>
        <Left>
          <Image style={styles.logo} source={{uri:'./learn.png'}}/>
          <Thumbnail square style={styles.logo} source={{uri:'./learn.png'}}/>
        </Left>
        <Right>
          <IconButton icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></IconButton>
        </Right>
      </Header>

      <View style={{alignItems: 'center', alignContent:'center',}}>
      <Thumbnail square style={styles.logo} source={{uri:'learn.png'}}/>
      <Image style={styles.logo} source={{uri:'./learn.png'}}/>
      
      <Text>Profile Screen</Text>
      <View>
      <Text>test</Text>
    </View>
    </View>
    <View style={styles.container}>
      
      <Image
        style={styles.logo}
        source={require('./image/learn.png')}
      />
      </View>
      </Container>
    
    
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'Settings',
            params: { user: 'jane' },
          })
        }
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator  style={styles.nav}>
      <Stack.Screen name="my Learning" component={ProfileScreen} style={styles.nav} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
    
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Root" drawerPosition="right">
        <Drawer.Screen name="Root" component={Root} />
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    backgroundColor:'#5fdeb6',
  },
  test_nav:{ 
    backgroundColor:"#81e6b5", 
  },
  logo:{
    
    width:80,
    height:80,
  },
});
