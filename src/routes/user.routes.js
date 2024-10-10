import { Router } from "express";

const router =  Router();

router.get('/users', (req, res) => {
    res.send('obteniendo usuarios')
} );

router.get('/users/:id', (req, res) => {
    const {id} = req.params
    res.send('buscando usuarios')
} );

router.post('/users', (req, res) => {
    res.send('Creación de usuarios');
} );

router.delete('/users/:id', (req, res) => {
    res.send('Eliminando usuarios')
} );

router.put('/users/:id', (req, res) => {
    const {id} = req.params
    res.send('Editando usuarios')
} );

export default router;