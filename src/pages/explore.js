import * as React from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { LargeTile, HeaderButton } from 'components/elements';
import {exploreData} from '../../mockData';
import ListRecipes from './listRecipes';
import { createStackNavigator } from '@react-navigation/stack';
import {withTheme} from 'hooks/withTheme';


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
                    containerStyle ={{
                        //todo
                    }}
                    inputContainerStyle ={{
                        //todo
                    }}
                    inputStyle={{
                        backgroundColor:'#FFF'
                    }}
                />
                {list}
            </View>
        );
}

function Explore({navigation, theme}){
    return (
        
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    alignSelf: 'center',
                    color: theme.header.text
                },
                headerStyle: {
                    backgroundColor: theme.header.background,
                },
                headerRight: () => (
                    <HeaderButton
                        onPress={() => navigation.toggleDrawer()}
                    />

                )
            }}
        >
            <Stack.Screen
                name="Explore"
                component={ExploreView}
                // options={{
                    
                // }}
            />
            <Stack.Screen
                name="ListRecipes"
                component={ListRecipes} />
        </Stack.Navigator>
    )
}

export default withTheme(Explore)