
const ExplorerService = require("./../services/ExplorerService");
const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");


// TODO
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

}

module.exports = ExplorerController;