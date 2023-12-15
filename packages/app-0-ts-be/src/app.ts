import { createExpressApp, createExpressRouter } from '@gmahechas/common-express-ts-be';

const app = createExpressApp();
const router = createExpressRouter();

export const routes = router.use('/rest', [
	app.get('/', (req, res) => {
		res.send('Hello from app-0!');
	})
]);

app.use(routes);

export { app };