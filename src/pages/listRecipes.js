import * as React from 'react';
import { Text, View  } from 'react-native';

export default function ListRecipes({ navigation, route }) {
    console.log(route)
    navigation.setOptions({ title: route.params })

    return (
        <View >
            <Text> {route.params} </Text>
        </View>
    );
}
