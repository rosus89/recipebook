import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, MyRecipes, MyKitchen, ShoppingList } from 'pages'

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="My Recipes" component={MyRecipes} />
            <Tab.Screen name="My Kitchen" component={MyKitchen} />
            <Tab.Screen name="Shopping List" component={ShoppingList} />
        </Tab.Navigator>
    );
}