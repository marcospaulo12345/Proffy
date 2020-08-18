import jwt, { DecodeOptions } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
const authConfig = require('../config/auth');

interface RequestUser extends Request{
    userId: number;
}

module.exports = (request: RequestUser, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;

    if(!authHeader)
        return response.status(401).send({ error: 'No token provided' });

    const parts = authHeader.split(' ');

    if(!(parts.length === 2))
        return response.status(401).send({ error: 'Token error' });
    
        const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme))
        return response.status(401).send({ error: 'Token malformatted' });
    

    jwt.verify(token, authConfig.secret, (err: any, decoded: any) => {
        if(err) return response.status(401).send({ error: 'Token invalid' });

        request.userId = decoded.id;
        return next();
    });
    
}