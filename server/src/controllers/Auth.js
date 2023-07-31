const bcrypt = require('bcrypt');
const {connect} = require('stream')
const crypto = require('crypto');
const StreamChat = require('stream-chat')
const  environmentVariables  = require("../config");

const Signup = async (req,res)=>{
    try{
        const userId = crypto.randomBytes(16).toString('hex')
        const {fullName,username, phoneNumber, password, avatarUrl}= req.body;
        const ServerClient = connect(
          environmentVariables.STREAM_API_KEY,
          environmentVariables.STREAM_API_SECRET,
          environmentVariables.STREAM_APP_ID
        );
        const securedPassword = await bcrypt.hash(password, 10)
        const token = ServerClient.createUserToken(userId);
        res.status(200).json({token, fullName, username, userId, securedPassword, phoneNumber});
    }

    catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
}
const Login = ()=>{}




module.exports = {Login, Signup}