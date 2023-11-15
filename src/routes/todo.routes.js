import express from 'express'

import { addTodo, getAllTodos, deleteTodo } from '../controllers/todo.controllers.js'


const router = express.Router()


router.post('/', addTodo) 
router.get('/', getAllTodos) 
router.delete('/:id', deleteTodo) 
// router.add('/', addTodo) 


// this is === /students
// router.get('/', getStudents) //GET all students
// router.post('/', addStudent) // ADD a new student
// router.get('/:id', getStudent) // GET a single student by id
// router.put() // UPDATE a student
// router.delete() // DElETE a student

export default router