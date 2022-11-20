const validator = require('validator');
const users = require("../model/users-model");


const myMiddleWareValid = (req, res, next) => {
    const bodyEmail = req.body.email;
    const bodyPassword = req.body.password;
    const temp = bodyEmail.indexOf("@");
    const last = bodyEmail.slice(bodyEmail.length - 4);

    const user = users.find(findUser => findUser.email == bodyEmail);
    temp < 0 ? res.send({ massage: "you must to use @" }) : last != ".com" ? res.send({ massage: "you must to be .com" }) :
        !user ? res.send("email not found") : user.password !== bodyPassword ? res.send("password not found") : next();
};

const validEmail= (email)=>{
    const temp = email.indexOf("@");
    const last = email.slice(email.length - 4);
    if(temp>3&&last==".com"){
        return true
    }
    return false
};
const validPassword = (password,confirmPassword)=>{
    if(password==confirmPassword){
        return true;
    };
    return false
};
const validAge = (age)=>{
    const dateNow = new Date().getFullYear();
    const userDate = new Date(age).getFullYear();
    const userAge = dateNow - userDate;
    console.log(userAge);
    if(userAge<18){
        return false
    }
    return true
};


const myValidRegister = (req, res, next) => {
    const valid = {
        reqPassword: req.body.password,
        reqConfirmPassword: req.body.confirmPassword,
        temp: req.body.email.indexOf("@"),
        last: req.body.email.slice(req.body.email.length - 4),
        userAge: new Date().getFullYear() - new Date(req.body.age).getFullYear()
    }

    valid.temp < 3 ? res.send({ massage: "you must to be @" }) : valid.last !== ".com" ? res.send({ massage: "you must to be .com" }) :
        valid.userAge < 18 ? res.send({ massage: "you must to be 18+" }) :
            valid.reqPassword !== valid.reqConfirmPassword ? res.send({ massage: "the password is not confirm" }) : next();
};

const myValidLogin = (req, res) => {
    const reqBody = req.body;
    const temp = reqBody.email.indexOf("@");
    const last = reqBody.email.slice(reqBody.email.length - 4);

    const user = users.find(findUser => findUser.email == reqBody.email);

    temp < 0 ? res.send({ Error: "you must to use @" }) : last != ".com" ? res.send({ Error: "you must to be .com" }) :
        !user ? res.send({ Error: "email not found" }) : user.password !== reqBody.password ? res.send({ Error: "password not found" }) :
            (res.send({ massage: "success", email: user.email, token: user.token }));
};


const validUserFly = (req, res, next) => {
    const reqBody = req.body;
    const temp = reqBody.email.indexOf("@");
    const last = reqBody.email.slice(reqBody.email.length - 4);

    const user = users.find(findUser => findUser.email == reqBody.email);

    temp < 0 ? res.send({ Error: "you must to use @" }) : last != ".com" ? res.send({ Error: "you must to be .com" }) :
        !user ? res.send({ Error: "email not found" }) : user.token !== reqBody.token ? res.send({ Error: "Token not found" }) : next();
};

module.exports = {
    validEmail,
    validPassword,
    validAge
};