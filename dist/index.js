"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const nhanvien_router_1 = __importDefault(require("./src/router/nhanvien.router"));
const app = (0, express_1.default)();
const port = 8080;
app.set('view engine', 'ejs');
app.set("views", './src/views');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
async function main() {
    await mongoose_1.default.connect('mongodb://localhost:27017/QuanLyNV');
}
main()
    .then(res => {
    console.log('Connected successfully to server');
})
    .catch(console.error);
app.use('/nhanvien', nhanvien_router_1.default);
app.listen(port);
//# sourceMappingURL=index.js.map