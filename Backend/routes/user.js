const express = require("express")
const router = express.Router()
const {userLogin, userSignUp, getUser}=require('../controllers/user')

router.post('/register',userSignUp)
router.post('/login',userLogin)
router.get('/user/:id',getUser)



module.exports=router