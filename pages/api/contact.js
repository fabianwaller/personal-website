import TelegramBot from 'node-telegram-bot-api';

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export default async function handleContact(req, res) {
    try {
        await sendContact(req.body);
    } catch (err) {
        console.error(err);
        return res.status(400).json('Your message could not be sent. Please try again later.');
    }
    return res.status(200).json('Your message has been sent.');
}

const sendContact = async (body) => {
    if (body.name == null || body.email == null || body.message == null) {
        throw new Error('Missing required contact fields');
    }

    const telegramBot = new TelegramBot(botToken);
    await telegramBot.sendMessage(chatId, `Name: ${body.name} \nEmail: ${body.email} \nMessage: ${body.message}`)
}