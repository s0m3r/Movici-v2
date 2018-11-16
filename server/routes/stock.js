'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')



const Bicicleta = require('../models/Bicicleta')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Post

app.post('/agregar/bicicletas',(req,res) => {
	console.log('POST /agregar/bicicletas')
	console.log(req.body)

	let bici = new Bicicleta()
	bici.Tipo = req.body.Tipo
	bici.Idsucursal = req.body.Idsucursal
	bici.Disponible = req.body.Disponible

	bici.save((err, Bicicletasguardada)=>{
		if(err) res.status(500).send({message:'Error al guardar en la base de datos'})
		res.status(200).send({bicicletas: Bicicletasguardada})
	})
})




module.exports = app;