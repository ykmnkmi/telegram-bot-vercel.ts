import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

const replyToMessage = async (
  context: Context,
  messageID: number,
  string: string
) => {
  await context.reply(string, { reply_parameters: { message_id: messageID } });
};

const greeting = () => {
  return async (context: Context) => {
    debug('Triggered "greeting" text command');

    const messageID = context.message?.message_id;
    const userName = `${context.message?.from.first_name} ${context.message?.from.last_name}`;

    if (messageID) {
      await replyToMessage(context, messageID, `Hello, ${userName}!!!`);
    }

    console.log(context.update);
  };
};

export { greeting };
