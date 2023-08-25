/*
    1. Ubah API CRUD berikut menggunakan Database.
*/

import express from 'express';
import * as UserService from './services/userService.js';

const app = express();
const port = 8080;
const host = "localhost";
app.use(express.json())

app.get('/users', (req, res) => {
    const id = req.query.id;
    if (!id) {
        UserService.getUser(req, res);
    } else {
        UserService.getUserbyId(req, res);
    }
});
app.post('/users', UserService.addUser);
app.put('/users', UserService.updateUser);
app.delete('/users', UserService.deleteUser);

app.listen(port, host, () => {
    console.log(`server berjalan pada http://${host}:${port}`);
})
