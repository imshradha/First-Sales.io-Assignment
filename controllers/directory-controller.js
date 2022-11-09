import directoryModel from "../models/directory-model.js";

export const createDirectory = async (req, res) => {
    try {
        const requestBody = req.body;

        const newDirectory = await directoryModel.create(requestBody);
        
        return res.status(201).send({ message: "Todo item added successfully", data: newDirectory })

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}