import { createExpressApp } from '@gmahechas/common-express-ts-be';
import { routes } from './routes';

const app = createExpressApp();

app.use(routes);

export { app };
