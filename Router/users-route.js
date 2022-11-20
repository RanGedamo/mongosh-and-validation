const router = require('express').Router();
const {getAllUsers,postNewUser,getUserByLogin} = require('../controller/users-controller');


router.get('/',getAllUsers);
router.post('/create',postNewUser);
router.get('/login',getUserByLogin)


module.exports=router;