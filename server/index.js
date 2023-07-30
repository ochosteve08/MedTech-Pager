const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({message: "medical pager"})
})

app.listen(PORT, (req, res)=>{
    console.log(`listening on http://localhost:${PORT}`)
})