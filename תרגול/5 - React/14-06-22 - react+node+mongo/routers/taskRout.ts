import { Router } from "express";
import { addTask, getTasks } from "../controllers/taskCont";
const router = Router();

router
    .get('/get-task', getTasks)
    .post('/add-task', addTask)

export default router;