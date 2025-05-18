const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3000;
const db = mysql.createConnection({
host: 'meuservermysql.mysql.database.azure.com',
user: 'adminmysql',
password: 'Teste123',
database: 'exemplo',
port: 3306,
ssl: { rejectUnauthorized: true }
});
db.connect(err => {
if (err) console.error('Erro na conexão:', err.message);
else console.log('Conectado ao MySQL Azure!');
});
app.get('/', (req, res) => {
  res.send('API rodando!');
});
app.get('/usuarios', (req, res) => {
db.query('SELECT * FROM usuarios', (err, results) => {
if (err) return res.status(500).json({ erro: err.message });
res.json(results);
});
});
app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});