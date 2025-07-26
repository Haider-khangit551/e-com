const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter')
const productRouter = require('./routes/productRoute')
const cors = require('cors');
require('dotenv').config();
require('./models/db');
const path = require('path')

const PORT = process.env.PORT || 5000

const _dirname = path.resolve()

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/product', productRouter);

app.use(express.static(path.join(_dirname, "/frontend/dist")))

app.get(/.*/, (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})

