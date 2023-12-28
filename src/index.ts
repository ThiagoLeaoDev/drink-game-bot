import { challenges } from "./mock/challenges";
import dotenv from "dotenv";

dotenv.config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

//terminal execution message

console.log("⚡🧙 Bot pronto para lançar feitiços!🧙⚡");

//generate challenge

bot.onText(/\/challenge/, (msg) => {
  const chatId = msg.chat.id;
  const challenge = challenges[Math.floor(Math.random() * challenges.length)];

  const challengeText = challenge.challenge;
  const drink = challenge.drink;

  const challengeTextWithDrink = `
  ⚡${challengeText}⚡\n\nOu\n\n🍺Beba ${drink} shot(s)🍺`;

  bot.sendMessage(chatId, challengeTextWithDrink);
});
