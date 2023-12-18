import express from 'express';

export const createExpressApp = (): express.Express => {
	const app = express();
	app.disable('x-powered-by');
	return app;
};

export const createExpressRouter = (): express.Router => {
	const router = express.Router();
	return router;
};

export type { Express, NextFunction, Request, Response } from 'express';
