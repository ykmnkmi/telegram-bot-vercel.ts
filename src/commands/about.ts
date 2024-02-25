import { Context } from 'telegraf';

import createDebug from 'debug';

import { author, name, version } from '../../package.json';

const debug = createDebug('bot:about_command');

const about = () => async (context: Context) => {
  const message = `*${name} ${version}*\n${author}`;
  debug(`Triggered "about" command with message \n${message}`);
  await context.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { about };
