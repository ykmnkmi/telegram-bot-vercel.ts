import { Telegraf } from 'telegraf';

import { about } from './commands';
import { greeting } from './text';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { development, production } from './core';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);

bot.command('about', about());
bot.on('message', greeting());

const startVercel = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  await production(request, response, bot);
};

if (ENVIRONMENT !== 'production') {
  development(bot);
}

export { startVercel };
