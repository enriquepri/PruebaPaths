import express from 'express' // ESModules
// const express = require('express') = commonjs

// import { swaggerConfig } from './swagger.config'// Prueba personal, no del video original

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Alguien ha pingeado' + ' ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

// Parte de pruebas personales de swagger, no video original
// const expressSwagger = require('express-swagger-generator')(app)
// expressSwagger(swaggerConfig)

app.listen(PORT, () => {
  console.log(`Servidor en puesto ${PORT}`)
})
