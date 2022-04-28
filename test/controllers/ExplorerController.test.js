const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Suite de tests para el controlador ExplorerController", () => {

    test("Validando el metodo estatico getExplorersByMission", () => {
        const result = ExplorerController.getExplorersByMission("node");
        expect(result).not.toBeUndefined();
    });

    test("Validando el metodo estatico static getExplorersUsernamesByMission", () => {
        const result = ExplorerController.getExplorersUsernamesByMission("node");
        expect(result).not.toBeUndefined();
        expect(result.length).toBe(10);
    });

    test("Validando getExplorersAmonutByMission return 10 para node", () => {
        const result = ExplorerController.getExplorersAmonutByMission("node");
        expect(result).toBe(10);
    });

    // Tests para la el metodo applyValidationInNumber del controlodor ExplorerController
    test("Validando applyValidationInNumber para que retorne los valores correspondientes", () => {
        const value1 = ExplorerController.applyValidationInNumber(1);
        expect(value1).toBe(1);

        const value3 = ExplorerController.applyValidationInNumber(3);
        expect(value3).toBe("FIZZ");

        const value5 = ExplorerController.applyValidationInNumber(5);
        expect(value5).toBe("BUZZ");

        const value15 = ExplorerController.applyValidationInNumber(15);
        expect(value15).toBe("FIZZBUZZ");
    });
});