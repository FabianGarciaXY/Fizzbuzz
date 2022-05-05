
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const bot = new TelegramBot(process.env.TOKEN, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    bot.sendMessage(msg.chat.id, match[1]);
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
        return result;
    }
}

module.exports = ExplorerController;