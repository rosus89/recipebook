import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'



function HeaderButton({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Icon
                name='menu'
                color='#517fa4'
                size= {35}
                iconStyle={{ marginRight: 5}}
            />
        </TouchableOpacity>
    )
}
export default HeaderButton;