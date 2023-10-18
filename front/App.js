import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {

  const ip = '192.168.56.1';
  const porta = 9090;

  const openYouTube = () => {
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
      <Button title="Abrir YouTube no Windows" onPress={openYouTube} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;