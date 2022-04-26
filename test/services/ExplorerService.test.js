
const ExplorerService = require('./../../lib/services/ExplorerService')
const Reader = require('./../../lib/utils/Reader')
const explorers  = Reader.readJsonFile("explorers.json")

describe('Conjunto de tests para la clase ExplorerService', () => {
    
    test(')1 Test para validar se obtengan solo explorers de la mission node con el metodo filterByMission', () => {
        
        const explorersOfMissionNode = ExplorerService.filterByMission(explorers, 'node')

        for (let explorer of explorersOfMissionNode) {
            expect(explorer.mission).toBe('node')
        }
    })

    test('2) Test para validar validar la cantidad exacta de explorers en el metodo getAmountOfExplorersByMission', () => {
        
        const totalOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')
        expect(totalOfExplorers).toBe(10)
    })

    test('3) Test para validar se obtengan los Usernames con getExplorersUsernamesByMission', () => {
        
        const listOfUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, 'node')
        expect(listOfUsernames).not.toBe(null)
        expect(listOfUsernames.length).toBe(10)
    })
 })