import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { LargeTile, HeaderButton } from 'components/elements';
import {exploreData} from '../../mockData';
import ListRecipes from './listRecipes';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function ExploreView({ navigation }) {
    const [search, setSearch] = React.useState('');

    const updateSearch = (search) => {
        setSearch( search );
    };
    
    let list = exploreData.map((item) => (
        <LargeTile
            key={item.title}
            image={item.image}
            title={item.title}
            onPress={() => navigation.navigate('ListRecipes', item.title )}/>
            ))
        return (
            <View style = {{
                flex:1
            }}>
                <SearchBar
                    placeholder="Search Recipe"
                    onChangeText={updateSearch}
                    value={search}
                />
                {list}
            </View>
        );
}

export default function Explore(navigation){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Explore"
                component={ExploreView}
                options={{
                    // headerTitle: props => <LogoTitle {...props} />,
                    headerRight: () => (
                        <HeaderButton
                            onPress={() => alert('opens side nav')}
                        />

                    ),
                }}
            />
            <Stack.Screen
                name="ListRecipes"
                component={ListRecipes} />
        </Stack.Navigator>
    )
}