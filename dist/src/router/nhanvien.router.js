"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nhanvien_controller_1 = require("../controller/nhanvien.controller");
const nhanvienController = new nhanvien_controller_1.NhanvienController();
const nhanvienRouter = (0, express_1.Router)();
nhanvienRouter.get('/listnv', (req, res) => {
    nhanvienController.showListNv(req, res);
});
nhanvienRouter.get('/add', (req, res) => {
    nhanvienController.showFormAddEmploy(req, res);
});
nhanvienRouter.post('/add', (req, res) => {
    nhanvienController.addEmployee(req, res);
});
nhanvienRouter.get('/delete', (req, res) => {
    nhanvienController.deleteEmployee(req, res);
});
nhanvienRouter.get('/update', (req, res) => {
    nhanvienController.showFormUpdate(req, res);
});
nhanvienRouter.post('/update', (req, res) => {
    nhanvienController.updateEmployee(req, res);
});
exports.default = nhanvienRouter;
//# sourceMappingURL=nhanvien.router.js.map