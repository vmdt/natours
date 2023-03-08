const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./src/app');

dotenv.config({path: './config.env'});

const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB)
.then(() => console.log('Connect to database successfully!'))
.catch(console.log);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
})
