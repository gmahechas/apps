import { express } from '@gmahechas/common-express-ts';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello from app-0!');
})
app.disable('x-powered-by');

export { app };