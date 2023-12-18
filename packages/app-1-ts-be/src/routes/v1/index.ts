import { createExpressRouter } from '@gmahechas/common-express-ts-be';
import { authRoutes } from './auth.routes';
import { userRoutes } from './user.routes';

const router = createExpressRouter();

export const v1Routes = router.use('/v1', [authRoutes, userRoutes]);
