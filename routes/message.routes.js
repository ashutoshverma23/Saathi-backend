import express from 'express';
import { storeMessage, retriveMessage } from '../controllers/message.controller.js';

const router = express.Router();

router.get("/:id", retriveMessage);
router.post("/send/:id", storeMessage)

export default router;