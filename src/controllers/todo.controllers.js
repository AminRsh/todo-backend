// todo.controllers.js
import TodoModel from "../models/todo.model.js";
import Swal from 'sweetalert2';

export const addTodo = async (req, res) => {
    try {
        const newTodo = new TodoModel(req.body);
        await newTodo.save();
        res.status(201).send(newTodo);
    } catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}

export const getAllTodos = async (req, res) => {
    const AllTodos = await TodoModel.find().limit(10);
    res.send(AllTodos);
}

export const deleteTodo = async (req, res) => {
    try {
        const todo = await TodoModel.findByIdAndDelete(req.params.id);
        console.log(req.params.id)
        // console.log(req.params._id)

        if (!todo) {
            return res.status(404).send({ message: 'Todo not found' });
        }

        res.status(200).send({ message: 'Todo deleted successfully', deletedTodo: todo });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}
