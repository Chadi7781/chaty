const  {addMessageController,getAllMessagesController} from "../../../../../../../../../../services= require('../controllers/message.controller');


const express = require('express');

const router = express.Router();

router.post('/addMessage',addMessageController);
router.get('/getAllMessages',getAllMessagesController)

module.exports = router;


