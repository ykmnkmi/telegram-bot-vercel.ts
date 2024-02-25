# Telegram Bot

Telegram Bot based on [Vercel](https://vercel.com), Node.js and [Telegraf](https://github.com/telegraf/telegraf) framework.

## Before you start

First create `.env` file and add all necessary values:

```
BOT_TOKEN="<YOUR_BOT_API_TOKEN>"
```

## Start your local server

```
yarn
yarn dev
```

## Production

Goto [vercel git import](https://vercel.com/import/git).

Reference to [this update](https://vercel.com/docs/security/deployment-protection#migrating-to-standard-protection), you need turn off `Vercel Authentication`, Settings => Deployment Protection.
