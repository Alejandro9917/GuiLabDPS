import React from 'react';
import CatStack from './CatStack';
import DogStack from './DogStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="dogs" component={DogStack} options={{title: 'Dogs'}}/>
            <Tab.Screen name="cats" component={CatStack} options={{title: 'Cats'}}/>
        </Tab.Navigator>
    );
}