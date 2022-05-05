
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});



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