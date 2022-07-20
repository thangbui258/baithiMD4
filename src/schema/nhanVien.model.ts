
import mongoose, {Schema} from "mongoose";


const nhanvienSchema = new mongoose.Schema({
    maNV: String,
    name: String,
    age: Number,
    salary:Number,
    branch: {type:Schema.Types.ObjectId,ref:'Branch'}
})

const Nhanvien = mongoose.model("Nhanvien", nhanvienSchema)

export {Nhanvien};
