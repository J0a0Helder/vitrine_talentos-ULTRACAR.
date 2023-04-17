const express = require('express');
const cors = require('cors');
const employeesRouter = require('./routes/employeesRouter');
const clientsRouter = require('./routes/clientsRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/employees', employeesRouter)
app.use('/clients', clientsRouter)

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app; 
