import express, { Request, Response } from 'express';

interface RequestUser extends Request{
    userId?: number;
}

export default class ProjectController {
    async profile(request: RequestUser, reponse: Response) {
        reponse.send({ok: true, user: request.userId})
    }
}