import { createExpressRouter, Request, Response } from '@gmahechas/common-express-ts-be';

const router = createExpressRouter();

router.get('/', async (request: Request, response: Response) => {
	response.status(200).send({ data: 'ok from auth' });
});

export const authRoutes = router.use('/auth', router);
