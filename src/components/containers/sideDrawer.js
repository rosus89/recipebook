import React from 'react';
import { DrawerContentScrollView} from '@react-navigation/drawer';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {DrawerButton} from 'components/elements';

function SideDrawer(props) {
    const {theme} = props;
    return (
        <DrawerContentScrollView
            {...props}
            style= {{ backgroundColor:theme.sidebar.background}}
        >
            <View
                style= {{ 
                    flexDirection: 'row',
                    flex:1,
                    alignItems:'center',
                    backgroundColor: theme.header.background
                    }}>
                <Icon name='person' type='material' size={24} color='red' reverse style={{flex:1}}/>
                <Text
                    style= {{fontSize: 24,
                            flex:3,
                            textAlign:'center',
                            color:theme.sidebar.text}}>
                    Name
                </Text>
            </View>
            <View elevation={6} >
                <DrawerButton btnText='Favorites' iconName='ios-heart' iconType='ionicon' onTouch={null} />
                <DrawerButton btnText='Messages' iconName='ios-mail' iconType='ionicon' onTouch={null} />
                <DrawerButton btnText='Following' iconName='ios-eye' iconType='ionicon' onTouch={null} />
                <DrawerButton btnText='Followers' iconName='ios-eye' iconType='ionicon' onTouch={null} />
                <DrawerButton btnText='Settings' iconName='ios-settings' iconType='ionicon' onTouch={null} />
            </View>
            <View>
                <DrawerButton btnText='Help' iconName='ios-help-circle' iconType='ionicon' onTouch={null} />
                <DrawerButton btnText='Contact' iconName='ios-chatboxes' iconType='ionicon' onTouch={null} />
            </View>
            
        </DrawerContentScrollView>
    );
}

export default SideDrawer;