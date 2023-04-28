import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateReportMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('middleware working');
        const authorization = req.headers.authorization;
        if (!authorization) {
            return res.status(403).send({ error: 'no authentication token found' });
        }
        next();
    }
}