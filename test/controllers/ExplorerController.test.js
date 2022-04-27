const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe('Suite de tests para el controlador ExplorerController', () => {

    test('Validando el metodo estatico getExplorersByMission', () => {
        const result = ExplorerController.getExplorersByMission('node');
        expect(result).not.toBeUndefined();
    });

    test('Validando el metodo estatico static getExplorersUsernamesByMission', () => {

        const result = ExplorerController.getExplorersUsernamesByMission('node');
        expect(result).not.toBeUndefined();
        expect(result.length).toBe(10);
    });

    test('Validando getExplorersAmonutByMission return 10 para node', () => {
        const result = ExplorerController.getExplorersAmonutByMission('node');
        expect(result).toBe(10);
    })


})