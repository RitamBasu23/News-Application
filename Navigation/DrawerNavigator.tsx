
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import AboutScreen from '../screens/AboutScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
//import CustomDrawerContent from '../components/common/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="NewsFeed"
        //drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        
<Drawer.Screen name="NewsDetail" component={NewsDetailScreen} />

        <Drawer.Screen name="NewsDetail" component={NewsFeedScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
