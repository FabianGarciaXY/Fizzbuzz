
class ExplorerService {

    static filterByMission(explorers, mission) {
        return explorers.filter( explorer => explorer.mission == mission)
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const amountExpByMission = explorers.filter( explorer => explorer.mission == mission)
        return amountExpByMission.length
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersUsername = explorers.filter( explorer => explorer.mission == mission)
        return explorersUsername.map(explorer => explorer.githubUsername)
    }
}

module.exports = ExplorerService