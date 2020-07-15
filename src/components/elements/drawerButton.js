import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { withTheme } from 'hooks/withTheme';


function DrawerButton({ onPress, btnText, iconName, iconType, theme }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: 'row',
                paddingHorizontal: '5%',
                paddingVertical: '3%'
            }}
        >
            <Icon
                name={iconName}
                type={iconType}
                color={theme.header.text}
                size={24}
                iconStyle={{ paddingRight: 10 }}
            />
            <Text
                style={{
                    fontSize: 18,
                    flex: 3,
                    textAlign: 'left',
                    color: theme.header.text 
                }}>
                {btnText}
            </Text>
        </TouchableOpacity>
    )
}
export default withTheme(DrawerButton);