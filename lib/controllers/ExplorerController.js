
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();


const bot = new TelegramBot(process.env.TOKEN, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content of the message
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);
    if(!isNaN(numberToApplyFb)){
        const result = ExplorerController.applyValidationInNumber(numberToApplyFb);
        const responseBot = `${msg.from.username} Tu número es: ${numberToApplyFb}. Validación: ${result}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, `${msg.from.username}! Envía un número válido`);
    }
});


class ExplorerController {

    static getExplorersByMission(mission) {
        const result = ExplorerService.filterByMission(explorers, mission);
        return result;
    }

    static getExplorersUsernamesByMission(mission) {
        const result = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return result;
    }

    static getExplorersAmonutByMission(mission) {
        const result = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return result;
    }

    static applyValidationInNumber(number) {
    
        const result = FizzbuzzService.applyValidationInNumber(number);
        // TODO
        // Here goes the code of the bot
        return result;
    }
}

module.exports = ExplorerController;