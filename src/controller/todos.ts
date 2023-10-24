import { RequestHandler } from "express";
import { Todos } from "../models/todos";

export const createToDo: RequestHandler =async (req,res, next) => {
    var todos = await Todos.create({...req.body});
    return res.status(200).json({message:"ToDo created succesfully", data: todos});
};

export const deleteToDo: RequestHandler =async (req, res, next) => {
    const {id} = req.params;
    const deletedToDo: Todos|null = await Todos.findByPk(id);

    await Todos.destroy({where:{id}});

    return res.status(200).json({message:"ToDo deleted succesfully", data: deletedToDo});
}

export const getAllToDo: RequestHandler =async (req, res, next) => {
    const allTodos: Todos[] = await Todos.findAll();

    return res.status(200).json({message:"ToDo fetched succesfully", data: allTodos});
}

export const getTodoById: RequestHandler =async (req, res, next) => {
    const {id} = req.params;
    const todos:Todos|null = await Todos.findByPk(id);

    return res.status(200).json({message:"ToDo fetched succesfully", data: todos});
}

export const updateToDo: RequestHandler =async (req, res, next) => {
    const {id} = req.params;
    await Todos.update({...req.body}, {where:{id}});
    const updatedTodos:Todos|null = await Todos.findByPk(id);

    return res.status(200).json({message:"ToDo updated succesfully", data: updatedTodos});
}