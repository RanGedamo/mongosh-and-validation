const users = require('../model/users-model');
const {validAge,validEmail,validPassword} = require('../validation/valid');

const getAllUsers = (req,res)=>{
    !users?res.send({massage:"users not found"}):res.send({massage:"success",users})
};

const postNewUser = (req,res)=>{
    const bodyId = {
        id:Math.floor(Math.random()*1000)
    }
    req.body.token =  Math.floor(Math.random() * req.body.token);
    
    !users?res.send({massage:"users not found"}):validAge(req.body.age)==false?res.send({massage:"18+"})
    :validEmail(req.body.email)==false?res.send({massage:"Email not available"}):
    validPassword(req.body.password,req.body.confirmPassword)==false?res.send({massage:"password not same"}):
    (users.push(req.body.bodyId),res.send({massage:"success",users}))
    
};

const getUserByLogin = (req,res)=>{
    !users?res.send({massage:"users not found"}):res.send({massage:"success",users})
};


module.exports={
    getAllUsers,
    postNewUser,
    getUserByLogin
}