require('dotenv').config();
const express = require('express');
const dbConnect = require('./src/config/mongoDb.js');
const cors = require('cors');
const commentRoutes = require('./src/routes/commentRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log('Listening on port', PORT));

