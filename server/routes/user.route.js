const {newUser,loginUser,users}=require('../controllers/user')
const router=require('express').Router()


router.post('/signup',newUser)
router.post('/login',loginUser)
router.get('/users',users)
module.exports=router