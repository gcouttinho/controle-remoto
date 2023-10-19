import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import CustomButton from '../components/button';

const Controll = () => {

    const ip = '192.168.56.1';
    const porta = 9090;

    const openThis = () => {
        axios.get(`http://${ip}:${porta}/abrir-youtube`)
            .then(response => {
                console.log('Solicitação enviada com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao enviar solicitação:', error);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <CustomButton onPress={openThis} imageSource={require('../assets/images/youtube.png')} />
                <CustomButton onPress={openThis} imageSource={require('../assets/images/discord.png')} />
                <CustomButton onPress={openThis} imageSource={require('../assets/images/github.png')} />
                <CustomButton onPress={openThis} imageSource={require('../assets/images/vscode.png')} />
                <CustomButton onPress={openThis} imageSource={require('../assets/images/powershell.png')} />
                <CustomButton onPress={openThis} imageSource={require('../assets/images/firebase.png')} />
                <CustomButton onPress={openThis} imageSource={require('../assets/images/youtube.png')} />
                <CustomButton onPress={openThis} imageSource={require('../assets/images/youtube.png')} />
                <CustomButton onPress={openThis} imageSource={require('../assets/images/youtube.png')} />
                <CustomButton onPress={openThis} imageSource={require('../assets/images/youtube.png')} />
                {/*PowerShell*/}
                {/*FireBase*/}
                {/*ChatGPT*/}
                {/*Teams*/}
                {/*Email*/}
                {/*+*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',

    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: "65%",
    },
});

export default Controll;