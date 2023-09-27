const mongoose = require('mongoose');
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected!');
    } catch (err) {
        console.log(err);
        console.log('DB connection error!');
    }
}

module.exports = {db};