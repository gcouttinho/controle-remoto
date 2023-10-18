import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, imageSource }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={imageSource} style={styles.buttonImage} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    buttonText: {
        color: 'white',
    },
});

export default CustomButton;
