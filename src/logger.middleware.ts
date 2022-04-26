/* eslint-disable prettier/prettier */
import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(_req: Request, _res: Response, _next: NextFunction) {
    const logger = new Logger();
        const date = new Date();
        logger.log(date.toISOString() + " " + _req.baseUrl + " " + _req.url + " " + _req.method); 
        _next();       
    }
}