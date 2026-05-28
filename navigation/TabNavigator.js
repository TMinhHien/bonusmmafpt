import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AllApp from '../screens/AllApp';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const DummyScreen = ({ route }) => (
  <View style={styles.dummy}>
    <Text style={styles.dummyText}>🚧 {route.name}</Text>
    <Text style={styles.dummySub}>Coming Soon</Text>
  </View>
);

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="All Apps"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarLabelStyle: styles.tabLabel,
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Home:     focused ? '🏠' : '🏡',
              'All Apps': focused ? '⊞' : '⊟',
              Gold:     focused ? '🥇' : '🏅',
              Game:     focused ? '🎮' : '🕹️',
              Profile:  focused ? '👤' : '🧑',
            };
            return (
              <Text style={{ fontSize: size - 4 }}>
                {icons[route.name] || '•'}
              </Text>
            );
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

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingBottom: 10,
    paddingTop: 6,
    backgroundColor: '#fffeff',
    borderTopWidth: 1,
    borderTopColor: '#e0dde0',
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
  },
  dummy: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2eff2',
  },
  dummyText: {
    fontSize: 28,
    marginBottom: 8,
  },
  dummySub: {
    fontSize: 16,
    color: '#888',
  },
});
