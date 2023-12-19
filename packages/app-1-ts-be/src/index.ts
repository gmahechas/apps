import { app } from './app';

const start = async (): Promise<void> => {
	try {
		app.listen(30000, () => {
			console.log(`environment:`);
			console.log(`app is runnig on: http://localhost:${30000}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
