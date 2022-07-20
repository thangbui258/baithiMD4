import {Nhanvien} from "../schema/nhanVien.model";
import {Branch} from "../schema/branch.model";
import {Schema} from "mongoose";

export class NhanvienController {
    async showListNv(req:any,res:any){
        const branchs = await Branch.find()
        const nhanviens = await Nhanvien.find().populate('branch')

        res.render('danhsachNV',{data:nhanviens})
    }

    async showFormAddEmploy(req:any,res:any){
        const branchs = await Branch.find()
        res.render('addemployee',{data:branchs})
    }

    async addEmployee(req:any,res:any){
        const branchID = req.body.branch;
        const branchSelect = await Branch.findOne({_id:branchID});
        const nhanvienNew = new Nhanvien({
            maNV: req.body.maNV,
            name: req.body.name,
            age: +(req.body.age),
            salary:+(req.body.salary),
            branch: branchSelect
        })
        await nhanvienNew.save();
        res.redirect('/nhanvien/listnv')
    }

    async deleteEmployee(req:any,res:any){
        let employee = await Nhanvien.findOne({_id:req.query.id});
        await employee.remove();
        res.redirect('/nhanvien/listnv')
    }

    async updateEmployee(req:any,res:any){

        const branchID = req.body.branch;
        const branchSelect = await Branch.findOne({_id:branchID});
        console.log(branchSelect)
        let employee = await Nhanvien.findOne({_id:req.body._id});
        console.log(employee)
        employee.maNV = req.body.maNV
        employee.name = req.body.name
        employee.age = req.body.age
        employee.salary = req.body.salary
        employee.branch = req.body.branch
        await employee.save()
        res.redirect('/nhanvien/listnv')
    }

    async showFormUpdate(req:any,res:any){
        const nhanvien = await Nhanvien.findOne({_id:req.query.id}).populate('branch')
        const branchs = await Branch.find()
        let data = {
            nhanvien:nhanvien,
            branchs:branchs
        }
        res.render('update',{data})
    }


}



