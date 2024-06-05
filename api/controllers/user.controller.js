import { request, response } from "express";

export const test = (request,response) => {
    response.json({message:'API is working!'})
}