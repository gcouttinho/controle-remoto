import React from 'react';
import { TouchableOpacity, Image, StyleSheet} from 'react-native';

const CustomButton = ({ onPress, imageSource}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={imageSource} style={styles.buttonImage} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 130,
        height: 130,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1c1c1c',
        margin: 7,
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
