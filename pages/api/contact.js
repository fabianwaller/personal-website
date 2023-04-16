import TelegramBot from 'node-telegram-bot-api';

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const telegramBot = new TelegramBot(botToken);

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
    const data = {
        name: body.name,
        email: body.email,
        message: body.message,
        date: new Date()
    };

    if (data.name == null || data.email == null || data.message == null) {
        throw new Error('Missing required contact fields');
    }

    telegramBot.sendMessage(chatId, `Name: ${data.name} \nEmail: ${data.email} \nMessage: ${data.message}`)
}