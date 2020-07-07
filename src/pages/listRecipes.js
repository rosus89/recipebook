import * as React from 'react';
import { Text, View  } from 'react-native';

export default function ListRecipes({ navigation, route }) {
    console.log(route)
    return (
        <View >
            <Text> {route.params} </Text>
        </View>
    );
}
