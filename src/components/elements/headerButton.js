import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { withTheme } from 'hooks/withTheme';


function HeaderButton({ onPress, theme }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style= {{ position: 'absolute'}}
        >
            <Icon
                name='menu'
                color={theme.header.text}
                size= {35}
                iconStyle={{ marginRight: 5}}
            />
        </TouchableOpacity>
    )
}
export default withTheme(HeaderButton)