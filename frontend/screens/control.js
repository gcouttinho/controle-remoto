import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import CustomButton from '../components/button';
import styles from '../styles/styleControl';
import { ip } from '../config';

const buttonsData = [
    { image: require('../assets/images/youtube.png'), action: 'youtube' },
    { image: require('../assets/images/discord.png'), action: 'discord' },
    { image: require('../assets/images/github.png'), action: 'github' },
    { image: require('../assets/images/vscode.png'), action: 'vscode' },
    { image: require('../assets/images/powershell.png'), action: 'powershell' },
    { image: require('../assets/images/firebase.png'), action: 'firebase' },
    { image: require('../assets/images/chatgpt.png'), action: 'chatgpt' },
    { image: require('../assets/images/teams.png'), action: 'teams' },
    { image: require('../assets/images/gmail.png'), action: 'gmail' },
    { image: require('../assets/images/mais.png'), action: 'mais' },
];

const Control = () => {
    const porta = 9090;
    const url = `http://${ip}:${porta}`;

    const performAction = (action) => {
        axios.get(`${url}/${action}`)
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
                {buttonsData.map((data, index) => (
                    <CustomButton
                        key={index}
                        onPress={() => performAction(data.action)}
                        imageSource={data.image}
                    />
                ))}
            </View>
        </View>
    );
};

export default Control;
