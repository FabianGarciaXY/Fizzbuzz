
const ExplorerService = require('./../services/ExplorerService');
const FizzbuzzService = require('./../services/FizzbuzzService');
const Reader = require('./../utils/Reader');

// TODO

const getExplorersByMission = (mission) => {

    const explorers = Reader.readJsonFile('explorers.json')
    ExplorerService.filterByMission(explorers, mission)
}