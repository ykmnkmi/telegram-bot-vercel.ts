import { Context, Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';

import createDebug from 'debug';

const debug = createDebug('bot:dev');

const development = async (
  bot: Telegraf<Context<Update>>
) => {
  const me = await bot.telegram.getMe();
  const botInfo = me.username;

  debug('Bot runs in development mode');
  debug(`${botInfo} deleting webhook`);
  await bot.telegram.deleteWebhook();
  debug(`${botInfo} starting polling`);

  await bot.launch();

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
};

export { development };
