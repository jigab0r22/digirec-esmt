// Importation des modules ...............................................

import express from 'express'
import mysql from 'mysql'

// Creation des variables ................................................

const router = express.Router()
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "digirec_esmt"
})
db.connect((err) =>{
    if(err) throw err
    console.log("Connexion DB: OK")
})

// Les routes disponibles .................................................

router.get('/:idbailleur',(request,response)=>{
  let values = [
    [request.params.idbailleur]
]
  db.query('SELECT * FROM bailleur where id_bailleur=?',[values], (err,result)=>{
    if(err) throw err
    response.send(result)
})
})

// Exportation de la route ................................................

export default router
