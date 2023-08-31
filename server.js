const express = require('express');
const app = express();
const port = 3000

const cors = require('cors');
app.use(cors({
    origin: '*',
    credentials: true,
}));

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})