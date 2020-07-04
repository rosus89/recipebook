import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function Explore({ navigation }) {
    const [search, setSearch] = React.useState('');

    const updateSearch = (search) => {
        setSearch( search );
    };

    return (
        <View>
            <SearchBar
                placeholder="Search Recipe"
                onChangeText={updateSearch}
                value={search}
            />
        </View>
    );
}
