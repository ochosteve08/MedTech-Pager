const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routers/Auth.js')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const PORT = process.env.PORT || 5000;

app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.send({message: "medical pager"})
})

app.listen(PORT, (req, res)=>{
    console.log(`listening on http://localhost:${PORT}`)
})