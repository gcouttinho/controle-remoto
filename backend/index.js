import open from 'open';
import express from 'express';

const app = express();
const porta = 9090;

app.get('/youtube', (req, res) => {
    open('https://www.youtube.com', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o youtube.');
        } else {
            res.send('youtube aberto com sucesso.');
        }
    });
}
);

app.get('/discord', (req, res) => {
    open('https://www.discord.com', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o discord.');
        } else {
            res.send('discord aberto com sucesso.');
        }
    });
}
);

app.get('/github', (req, res) => {
    open('https://www.github.com', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o github.');
        } else {
            res.send('github aberto com sucesso.');
        }
    });
}
);

app.get('/vscode', (req, res) => {
    open('code', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o vscode.');
        } else {
            res.send('vscode aberto com sucesso.');
        }
    });
}
);

app.get('/powershell', (req, res) => {
    open('powershell.exe', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o powershell.');
        } else {
            res.send('powershell aberto com sucesso.');
        }
    });
}
);

app.get('/firebase', (req, res) => {
    open('https://firebase.google.com', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o firebase.');
        } else {
            res.send('firebase aberto com sucesso.');
        }
    });
}
);

app.get('/chatgpt', (req, res) => {
    open('https://www.chatgpt.com', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o chatgpt.');
        } else {
            res.send('chatgpt aberto com sucesso.');
        }
    });
}
);

app.get('/teams', (req, res) => {
    open('msteams://', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o teams.');
        } else {
            res.send('teams aberto com sucesso.');
        }
    });
}
);

app.get('/gmail', (req, res) => {
    open('https://mail.google.com', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o gmail.');
        } else {
            res.send('gmail aberto com sucesso.');
        }
    });
}
);

app.get('/mais', (req, res) => {
    open('https://www.google.com', { wait: false }, (err) => {
        if (err) {
            res.send('Erro ao abrir o mais.');
        } else {
            res.send('mais aberto com sucesso.');
        }
    });
}
);

app.listen(porta, () => {
    console.log(`Servidor está ouvindo na porta ${porta}`);
});
