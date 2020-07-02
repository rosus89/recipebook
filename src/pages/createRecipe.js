import * as React from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Card, ListItem, Button, Divider  } from 'react-native-elements';

export default function CreateRecipeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Input
                placeholder='My amazing Kong Po Chicken!'
                label='Name'
                
            />
            <Input
                placeholder='INPUT WITH ERROR MESSAGE'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
            />
            <Divider style={{ backgroundColor: 'blue' }} />
        </View>
    );
}