const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(`mongodb+srv://rutujadhekolkar97:${process.env.MONGODB_PASSWORD}@cluster0.pdssvjd.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// const connect=() =>{
//     mongoose.connect(`mongodb+srv://rutujadhekolkar97:${process.env.MONGODB_PASSWORD}@cluster0.pdssvjd.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
//         console.log("Connected to Server");
//     })
//     .catch((err)=>{
//         throw err;
//     })
// }





const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});