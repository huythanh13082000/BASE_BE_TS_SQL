import { Router } from "express";
import { createToDo, deleteToDo, getAllToDo, getTodoById, updateTodo } from "../../controllers/todo.controller";

const router = Router();

router.post("/", createToDo);

router.get("/", getAllToDo);

router.get("/:id", getTodoById);

router.put("/:id", updateTodo);

router.delete("/:id", deleteToDo);

export default router;