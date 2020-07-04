import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { LargeTile } from 'components/elements';
import {List} from 'components/containers';

export default function Explore({ navigation }) {
    const [search, setSearch] = React.useState('');
    
    const updateSearch = (search) => {
        setSearch( search );
    };
    let mockdata = [
        {
            image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1492181920-delish-sticky-orange-chicken-2.jpg",
            title: "Cuisine"
        },
        {
            image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1492181920-delish-sticky-orange-chicken-2.jpg",
            title: "Occasion"
        },
        {
            image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1492181920-delish-sticky-orange-chicken-2.jpg",
            title: "Ingredients"
        },
        {
            image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1492181920-delish-sticky-orange-chicken-2.jpg",
            title: "Flavour"
        },
        {
            image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1492181920-delish-sticky-orange-chicken-2.jpg",
            title: "Fitness"
        },
        {
            image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/15/1492181920-delish-sticky-orange-chicken-2.jpg",
            title: "Most Popular"
        }

    ]
    return (
        <View>
            <SearchBar
                placeholder="Search Recipe"
                onChangeText={updateSearch}
                value={search}
            />
            <List
                data={mockdata}
            >
                <LargeTile image title/>
            </List>

        </View>
    );
}
