import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, DetailsScreen, CreateRecipeScreen, CreateRecipe } from '../pages'

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={DetailsScreen} />
        </Tab.Navigator>
    );
}