import express from 'express';
import mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import nhanvienRouter from "./src/router/nhanvien.router";

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set("views", './src/views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

async function main() {
    await mongoose.connect('mongodb://localhost:27017/QuanLyNV');
}
main()
    .then(res => {
        // tslint:disable-next-line:no-console
        console.log('Connected successfully to server');
    })
    // tslint:disable-next-line:no-console
    .catch(console.error)

app.use('/nhanvien',nhanvienRouter)

app.listen(port)