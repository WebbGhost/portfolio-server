import express, { Router } from 'express';
import { emojiMe, healthCheck } from '../Controllers/healthCheckController';

const router: Router = express.Router();

type HealthCheckResponse = {
  status: string;
  data: {
    message: string;
  };
};
type EmojiResponse = {
  status: string;
  data: {
    message: string;
  };
};

router.get<{}, HealthCheckResponse>('/', healthCheck);
router.get<{}, EmojiResponse>('/emojis', emojiMe);

export default router;
