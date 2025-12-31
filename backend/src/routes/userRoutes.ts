import { Router } from "express";
import { createUser } from "../controllers/userControllers";


const router  = Router()

router.post('/user', createUser)

export default router