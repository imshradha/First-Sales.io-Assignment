import todoModel from '../models/todo-model.js';

export const addtodo = async (req, res) => {
    try {
        const requestBody = req.body;

        const newTodo = await todoModel.create(requestBody).populate('directory');
        
        return res.status(201).send({ message: "Todo item added successfully", data: task })

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}


