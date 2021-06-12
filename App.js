import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  JournalScreen,
  MeasureScreen,
  TreatmentScreen,
  ProfileScreen,
} from './app/screens';
import AddButton from './app/components/AddButton';
import Empty from './app/components/Empty';

const TabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        tabBarOptions={{
          showLabel: false,
        }}>
        <TabNavigator.Screen
          name="Journal"
          component={JournalScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Measures"
          component={MeasureScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Add"
          component={Empty}
          options={{
            tabBarIcon: ({color, size}) => <AddButton />,
          }}
        />
        <TabNavigator.Screen
          name="Treatment"
          component={TreatmentScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="band-aid" size={24} color="#CDCCCE" />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="user" size={24} color="#CDCCCE" />
            ),
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}
