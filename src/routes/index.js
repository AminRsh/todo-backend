import express from 'express'

import todoRoutes from './todo.routes.js'

const router = express.Router()

// router.use('/', function(req,res) {
//     res.send("Hello")
// })

router.use('/todo', todoRoutes)


export default router