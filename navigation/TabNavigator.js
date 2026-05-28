import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AllApp from '../screens/AllApp';
import Profile from '../screens/Profile';
import {
  NavAppIcon, NavAppIconActive,
  NavGameIcon, NavGameIconActive,
  NavGoldIcon, NavGoldIconActive,
  NavHomeIcon, NavHomeIconActive,
  NavProfileIcon, NavProfileIconActive,
} from '../components/index';

const Tab = createBottomTabNavigator();

const DummyScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Coming Soon</Text>
  </View>
);

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="All Apps"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { ...style.tabBar },
          tabBarIcon: ({ focused, color, size }) => {
            let Icon;
            switch (route.name) {
              case 'Home':
                Icon = focused ? NavHomeIconActive : NavHomeIcon;
                break;
              case 'All Apps':
                Icon = focused ? NavAppIconActive : NavAppIcon;
                break;
              case 'Gold':
                Icon = focused ? NavGoldIconActive : NavGoldIcon;
                break;
              case 'Game':
                Icon = focused ? NavGameIconActive : NavGameIcon;
                break;
              case 'Profile':
                Icon = focused ? NavProfileIconActive : NavProfileIcon;
                break;
            }
            return Icon ? <Icon width={size} height={size} color={color} /> : null;
          },
        })}
      >
        <Tab.Screen name="Home"     component={DummyScreen} />
        <Tab.Screen name="All Apps" component={AllApp} />
        <Tab.Screen name="Gold"     component={DummyScreen} />
        <Tab.Screen name="Game"     component={DummyScreen} />
        <Tab.Screen name="Profile"  component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  tabBar: {
    height: 90,
  },
});
