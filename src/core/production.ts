import { VercelRequest, VercelResponse } from '@vercel/node';
import { Context, Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';

import createDebug from 'debug';

const debug = createDebug('bot:dev');

const PORT = (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000;
const VERCEL_URL = `${process.env.VERCEL_URL}`;

const production = async (
  request: VercelRequest,
  response: VercelResponse,
  bot: Telegraf<Context<Update>>
) => {
  debug('Bot runs in production mode');
  debug(`Setting webhook: ${VERCEL_URL}`);

  if (!VERCEL_URL) {
    throw new Error('VERCEL_URL is not set.');
  }

  const getWebhookInfo = await bot.telegram.getWebhookInfo();

  if (getWebhookInfo.url !== VERCEL_URL + '/api') {
    debug(`Deleting webhook ${VERCEL_URL}`);
    await bot.telegram.deleteWebhook();
    debug(`Setting webhook: ${VERCEL_URL}/api`);
    await bot.telegram.setWebhook(`${VERCEL_URL}/api`);
  }

  if (request.method === 'POST') {
    await bot.handleUpdate(request.body as unknown as Update, response);
  } else {
    response.status(200).json('Listening to bot events...');
  }

  debug(`Starting webhook on port: ${PORT}`);
};

export { production };
