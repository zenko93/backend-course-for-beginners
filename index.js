import express from 'express';
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload"

const PORT = 5000;
const DB_URL = `mongodb+srv://zenko93:zenko93@cluster0.54mtiqc.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp(uri, callback) {
    try {
        await mongoose.connect(uri)
        app.listen(PORT, () => console.log('SERVER STARTED'))
    } catch (e) {
        console.log(e)
    }
}

startApp(DB_URL);

