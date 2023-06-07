const express = require('express')
const app = express()
const vehicules = require('./vehicules.json')
const reservations = require('./reservations.json')

// véhicules
app.get('/vehicules', (req,res) => { res.status(200).json(vehicules)})
app.get('/vehicules/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const véhicule = vehicules.find(vehicules => vehicules.id === id)
    res.status(200).json(véhicule)
})


// réservations
app.get('/reservations', (req,res) => { res.status(200).json(reservations)})
app.get('/reservations/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const reservation = reservations.find(reservations => reservations.id === id)
    res.status(200).json(reservation)
})



app.post('/reservations', (req, res) => {
    console.log(req.body) // Uniquement pendant la phase de dev
    reservations.push(req.body) // Les données insérées seront passées dans le body de la requête
    res.status(200).json(reservations)
})


app.put('/reservations/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let réservation = réservations.find(reservations => reservations.id === id)
    réservation.name = req.body.name,
        réservation.city = req.body.city,
        réservation.type = req.body.type,
        res.status(200).json(réservation)
})

app.delete('/reservations/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let réservation = réservations.find(reservations => reservations.id === id)
    réservation.splice(réservation.indexOf(réservation), 1)
    res.status(200).json(réservation)
})

app.listen(8080, () => { console.log("Serveur à l'écoute")})