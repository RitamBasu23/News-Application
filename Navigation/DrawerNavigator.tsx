import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NewsFeedScreen from '../Screens/NewsFeedScreen';
import NewsDetailScreen from '../Screens/NewsDetailScreen';
import AboutScreen from '../Screens/AboutScreen';
import LoginScreen from '../Screens/LoginScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import ProfileScreen from '../Screens/ProfileScreen';


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
