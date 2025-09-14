// backend/src/server.js
import db from './config/db.js';
import express from 'express'

const app = express()
const PORT = 5001

app.get('/api/test', (req,res) => {
   res.json({message: "hello world"})
})

app.listen(PORT,() => {
   console.log(`server is running on ${PORT}`)
})