import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, MyRecipes, MyKitchen, ShoppingList } from 'pages';
import { Icon } from 'react-native-elements';
import { withTheme } from 'hooks/withTheme';

const Tab = createBottomTabNavigator();

 function Navigator({theme}) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName, iconType;

                    if (route.name === 'Explore') {
                        iconName = focused ? 'md-search' : 'md-search'; //TODO
                        iconType = 'ionicon';
                        size = 30;
                    }
                    else if (route.name === 'My Recipes') {
                        iconName = focused ? 'book' : 'notebook';
                        iconType = focused ? 'octicon' : 'simple-line-icon';
                        size = focused ? 30 : size;
                    }
                    else if (route.name === 'My Kitchen') {
                        iconName = focused ? 'fridge' : 'fridge-outline';
                        iconType = 'material-community';
                        size = 30;
                    }
                    else if (route.name === 'Shopping List') {
                        iconName = focused ? 'md-basket' : 'shopping-basket';
                        iconType = focused ? 'ionicon' : 'fontisto';
                        size = focused ? 30 : size;
                    }

                    return <Icon name={iconName} type={iconType}  size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                inactiveBackgroundColor: theme.navigator.background.inactive,
                activeBackgroundColor: theme.navigator.background.active,
                activeTintColor: theme.navigator.text.active,
                inactiveTintColor: theme.navigator.text.inactive,
                keyboardHidesTabBar: true
            }}
        >
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="My Recipes" component={MyRecipes} />
            <Tab.Screen name="My Kitchen" component={MyKitchen} />
            <Tab.Screen name="Shopping List" component={ShoppingList} />
        </Tab.Navigator>
    );
}

export default withTheme(Navigator);