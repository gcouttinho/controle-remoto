import express from 'express';
import open from 'open';

const app = express();
const porta = 9090;

app.get('/abrir-youtube', (req, res) => {
    open('https://www.youtube.com', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o YouTube.');
        } else {
            res.send('YouTube aberto com sucesso.');
        }
    });
});

app.listen(porta, () => {
    console.log(`Servidor em execução na porta ${porta}`);
});
