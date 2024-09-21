"use server";

import { ValuesType } from "@/components/ContactForm";
import { TelegramBot } from "typescript-telegram-bot-api";

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const bot = new TelegramBot({ botToken: botToken });

export const sendContact = async (values: ValuesType) => {
  try {
    await bot.sendMessage({
      chat_id: chatId,
      text: `Name: ${values.name} \nEmail: ${values.email} \nMessage: ${values.message}`,
    });
  } catch (error) {
    console.error(error);
    throw new Error("error sending contact");
  }
};
