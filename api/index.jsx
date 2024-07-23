const express = require('express');
const app = express();
const cors = require('cors');


// might need ot change the origin
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173/', 

}));


app.get('/test', (req,res) => {
    res.json('test ok');
});

app.listen(4000);

//45:25 having issue getting connect to nodemon

// had to use node