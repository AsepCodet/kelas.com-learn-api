import { successResponse, errorResponse } from "../utils/response.js";
import { nanoid } from "nanoid";
import * as UserRepo from '../repository/user.js';

var users=[]

export const addUser = async (req, res, next) => {
    let name = req.body.name;
    let email= req.body.email;
    let password = req.body.password;
    let address = req.body.address;

    try {
        const result = await UserRepo.createData(name,email,password,address);
        successResponse(res, "berhasil menambahkan user", result[0])
    } catch (error) {
        errorResponse(res, "gagal menambahkan user: " + error.message, 500)
    }
}

export const getUser = async (req, res, next) => {

    const result = await UserRepo.getData();

    successResponse(res, "success", result[0])
}

export const getUserbyId = async (req, res, next) => {
    let id = req.query.id;
    const result = await UserRepo.getData(id);
    if (result[0].length==0){
        errorResponse(res, "user tidak ditemukan")
    } else {
        successResponse(res, "success", result[0])
    }
    
}

export const updateUser = async (req, res, next) => {
    let id = req.query.id;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    try {
        const result = await UserRepo.updateData(id,name,email,password);
        successResponse(res, "berhasil update user", result[0])
    } catch(error) {
        errorResponse(res, "user tidak ditemukan "+ error.message)
    }
}

export const deleteUser =  async (req, res, next) => {
    let id = req.query.id;

    try{
        const result = await UserRepo.deleteData(id);
        successResponse(res, "berhasil hapus user", result[0]);
    } catch(error) {
        errorResponse(res, "user tidak ditemukan")
    }
}