import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json());

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ message: 'Sistema funcionando no PC!' });
});

// Rota básica
app.get('/', (req, res) => {
  res.send('<h1>Laticínios Duartina</h1><p>Sistema rodando!</p>');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});