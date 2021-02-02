import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Button, Image, ScrollView, } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IconButton, Colors } from 'react-native-paper';

import {Header,Right,Left, Container, Thumbnail, Content, Card, CardItem, Body, Icon, } from 'native-base'

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
    <Container>
      <Header style={styles.test_nav}>
        <Left>
          
          <Thumbnail square style={styles.logo} source={require('./image/learn.png')}/>
        </Left>
        <Right>
          <IconButton icon="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></IconButton>
        </Right>
      </Header>
      
      <Content style={{backgroundColor:'#81e6b5', margin:30}}>
          <Card style={{borderRadius:50}}>
            <CardItem>
              <Left>
                <Thumbnail style={{height:30, width:30}} source={require('./image/pro.jpg')} />
                <Body>
                  <Text>HwanwooYu</Text>
                  <Text note>c++ init</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./image/card.jpg')} style={{margin:10, height: 150, width: 150, flex: 1, justifyContent: 'space-between', alignItems: 'center',borderRadius:20}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent title="추천 수" >
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent title="평가 수">
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Content>


<View style={{ height: 100 }}>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
        <Text style={{ fontWeight: 'bold' }}>카테고리</Text>

        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name="md-play" style={{fontSize:14}}></Icon>
            <Text style={{fontWeight:'bold'}}> Watch All</Text>
        </View>
    </View>
    <View style={{ flex: 3 }}>

    <ScrollView horizontal={true}>
      <View style={{flexDirection:'column',alignItems:'center'}}>
      <Thumbnail 
    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
    source={{uri: 'https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png' }} >
    </Thumbnail>
    <Text>코딩</Text>
    </View>
    <View style={{flexDirection:'column',alignItems:'center'}}>
    <Thumbnail 
    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl26_3P-JK93cCsNUbfiLf2frvPpOrPz-YBg&usqp=CAU' }} />
    <Text>제빵</Text>
    </View>

    <Thumbnail 
    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjIwk8J6HySnA4Lbq4GgKv_og10cX0fBVbg&usqp=CAU' }} />
    <Thumbnail 
    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
    source={{uri: 'https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png' }} />
    <Thumbnail 
    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl26_3P-JK93cCsNUbfiLf2frvPpOrPz-YBg&usqp=CAU' }} />
    <Thumbnail 
    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjIwk8J6HySnA4Lbq4GgKv_og10cX0fBVbg&usqp=CAU' }} />
    <Thumbnail 
    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
    source={{uri: 'https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png' }} />
    <Thumbnail 
    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl26_3P-JK93cCsNUbfiLf2frvPpOrPz-YBg&usqp=CAU' }} />
    <Thumbnail 
    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjIwk8J6HySnA4Lbq4GgKv_og10cX0fBVbg&usqp=CAU' }} />
    
    </ScrollView>
  </View>

</View>

</Content>
        
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
    
    width:40,
    height:40,
  },
});
