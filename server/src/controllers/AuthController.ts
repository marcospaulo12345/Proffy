import { Request, Response } from 'express';
import bycript from 'bcryptjs';
import jwt from 'jsonwebtoken';

import db from '../database/connection';
const authConfig = require('../config/auth');

function genereteToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

export default class AuthController {

    async register(request: Request, response: Response) {
        const {
            name,
            surname,
            email,
            password,
        } = request.body;

        try {

            const hash = await bycript.hash(password, 10);

            const users = await db('users').insert({
                name,
                surname,
                email,
                password: hash,
            })
            const user_id = users[0];
            return response.send({
                user_id,
                token: genereteToken({id: user_id})
            })
        } catch (err) {
            console.log(err)
            return response.status(400).json({
                error: 'Unexperted error while creating new class'
            })
        }
    }
    async authenticate(request: Request, response: Response){
        const {
            email,
            password,
        } = request.body;
        
        const users = await db('users')
            .where('users.email', email);

        if(users.length === 0)
            return response.status(400).send({ error: 'User not found'});

        const user = users[0];
        
        if(!await bycript.compare(password, user.password))
            return response.status(400).send({error: 'Invalid password'});

        user.password = undefined;

        return response.json({
            user,
            token: genereteToken({id: user.id})
        })
    }
}