const bcrypt = require("bcrypt");
const { connect } = require("stream");
const crypto = require("crypto");
const StreamChat = require("stream-chat").StreamChat;
const { environmentVariables } = require("../config");

const Signup = async (req, res) => {
  try {
    const userId = crypto.randomBytes(16).toString("hex");
    const { fullName, username, phoneNumber, password } = req.body;
    const serverClient = new StreamChat(
      environmentVariables.STREAM_API_KEY,
      environmentVariables.STREAM_API_SECRET,
      environmentVariables.STREAM_APP_ID
    );
    const securedPassword = await bcrypt.hash(password, 10);

    await serverClient.upsertUser({
      id: userId,
      name: username,
      phoneNumber,
      securedPassword,
      fullName,
      // add additional user fields if required
    });

    const token = serverClient.createToken(userId);
    res
      .status(200)
      .json({
        token,
        fullName,
        username,
        userId,
        securedPassword,
        phoneNumber,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const ServerClient = new StreamChat(
      environmentVariables.STREAM_API_KEY,
      environmentVariables.STREAM_API_SECRET
    );
    const client = StreamChat.getInstance(
      environmentVariables.STREAM_API_KEY,
      environmentVariables.STREAM_API_SECRET
    );
    const { users } = await client.queryUsers({ name: username });
    if (!users.length)
      return res.status(400).json({ message: "user not found" });
    const success = await bcrypt.compare(password, users[0].securedPassword);
    const token = ServerClient.createToken(users[0].id);

    if (success) {
      res.status(200).json({
        token,
        username,
        fullName: users[0].fullName,
        userId: users[0].id,
      });
    } else {
      res.status(500).json({ message: "incorrect password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { Login, Signup };
