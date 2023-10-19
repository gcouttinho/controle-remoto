import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const CustomButton = ({ onPress, imageSource, text }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={imageSource} style={styles.buttonImage} />
            <Text>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1c1c1c',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    buttonImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    buttonText: {
        color: 'white',
    },
});

export default CustomButton;
