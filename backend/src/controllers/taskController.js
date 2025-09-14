import db from '../config/db.js'

export const getAllTasks = async(req,res) => {
    try{
        const {rows} = await db.querry('SELECT * FROM tasks ORDER BY id ASC')
        res.json(rows)
    }
    catch (error) {
    console.error(error.message)
    res.status(500)
    }
}

export const createTask = async (req,res) => {
    try {
        const {text} = req.body
        const {rows} = await db.querry('INSERT INTO tasks (text) VALUE ($1) RETURNING *', [text])
        res.status(201)
    }
    catch (error) {
        console.error(error.message)
        res.status(500)
    }
}