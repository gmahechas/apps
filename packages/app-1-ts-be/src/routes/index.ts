import { createExpressRouter } from '@gmahechas/common-express-ts-be';
import { v1Routes } from './v1';

const router = createExpressRouter();

export const routes = router.use('/rest', [v1Routes]);
