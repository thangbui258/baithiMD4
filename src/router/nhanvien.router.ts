import {Router} from "express";
import {NhanvienController} from "../controller/nhanvien.controller";

const nhanvienController = new NhanvienController();
const nhanvienRouter = Router();

nhanvienRouter.get('/listnv',(req,res)=>{
    nhanvienController.showListNv(req,res)
})

nhanvienRouter.get('/add',(req,res)=>{
    nhanvienController.showFormAddEmploy(req,res)
})

nhanvienRouter.post('/add',(req,res)=>{
    nhanvienController.addEmployee(req,res)
})

nhanvienRouter.get('/delete',(req,res)=>{
    nhanvienController.deleteEmployee(req,res)
})

nhanvienRouter.get('/update',(req,res)=>{
    nhanvienController.showFormUpdate(req,res)
})

nhanvienRouter.post('/update',(req,res)=>{
    nhanvienController.updateEmployee(req,res)
})

export default nhanvienRouter