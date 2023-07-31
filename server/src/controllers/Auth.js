const bcrypt = require('bcrypt');
const {connect} = require('stream')
const crypto = require('crypto');
const StreamChat = require('stream-chat')
const API_KEY = "9xux5bjcdbyp";
const APP_ID = "1259527";
const API_SECRET =
  "7mh2wxsjb4gbr8jd9yda7wfubudktkqnrryzp9vkvsu3khrky6dzhxar48mzu3re";
const Login = (req,res)=>{
    try{
        const userId = crypto.randomBytes(16).toString('hex')
        const {fullName,username, phoneNumber, password, avatarUrl}= req.body;
        const ServerClient = connect(API_KEY);
    }
    catch(error){
        console.log(error);
    }
}
const Signup = ()=>{}




module.exports = {Login, Signup}