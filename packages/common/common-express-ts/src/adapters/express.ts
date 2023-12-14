import express from 'express';

export const createExpressApp = () => {
	const app = express();
	app.disable('x-powered-by');
	return app;
}