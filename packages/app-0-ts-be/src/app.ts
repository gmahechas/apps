import { express } from '@gmahechas/common-express-ts-be';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello from app-0!');
})
app.disable('x-powered-by');

export { app };