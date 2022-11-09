import express from "express";
import { addtodo} from "../controllers/todo-controller.js";
import { createDirectory } from "../controllers/directory-controller.js";

const router = express.Router();

router.post('/directory/create', createDirectory);

router.post('/todo-item/create', addtodo);

export default router;