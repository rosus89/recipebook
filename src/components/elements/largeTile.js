import * as React from 'react';
import { ImageBackground, Text, TouchableOpacity, StyleSheet} from 'react-native';




export default function LargeTile({image, title, onPress}){
    return(
        <TouchableOpacity
            key={title}
            onPress={onPress}
            style={styles.wrapper}
        >
            <ImageBackground
                source={image}
                style={styles.tileImage}
            >
                <Text
                    style={styles.tileTitle}
                >
                    {title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 6,
        flex: 1
    },

    tileTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -2, height: 1 },
        textShadowRadius: 10
    },

    tileImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});
