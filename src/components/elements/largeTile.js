import * as React from 'react';
import {ImageBackground, Text} from 'react-native';
function LargeTile({key, image, title}){
    return(
        <ImageBackground key={key}
            source={image}
            style={{
                boxSizing: 'border-box',
                height: 80,
                width: '100vw',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: 'white',
                }}
            >
                {title}
            </Text>
        </ImageBackground>
    )
}
export default LargeTile;