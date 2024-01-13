const express = require('express');

const app = express();
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'mysecretdb',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config);

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query(`CREATE TABLE IF NOT EXISTS people (name varchar(255))`)
connection.query(`ALTER TABLE people AUTO_INCREMENT = 1`)

connection.query(`INSERT INTO people (name) values ('Victor')`)
connection.query(`INSERT INTO people (name) values ('Carlos')`)
connection.query(`INSERT INTO people (name) values ('Gloria')`)
connection.query(`INSERT INTO people (name) values ('Bruno')`)

connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})


app.listen(port, () => console.log('rodando na porta ' + port))