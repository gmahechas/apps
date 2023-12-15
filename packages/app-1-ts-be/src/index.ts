import { app } from './app';

const start = async () => {
	try {
		app.listen(30000, () => {
			console.log(`environment:`);
			console.log(`app is runnig on: http://localhos:${30000}`);
		});
	} catch (error) {
	}
};

start();