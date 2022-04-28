const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test set para la clase FizzbuzzService", () => {

    test("1) Test para valida cuando el score no sea divisible por 3, 5 o ambos retorne el score mismo en la propiedad trick", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const result = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(result.trick).toBe(1);
    });

    test("2) Test para validar que cuando el score de un explorer es divisible de 3,  retorne \"FIZZ\"", () => {
        const explorer3 = {name: "Explorer3", score: 9};
        const result = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(result.trick).toBe("FIZZ");
    });

    test("3) Test para validar que cuando el score de un explorer es divisible por 5,  retorne \"BUZZ\"", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const result = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(result.trick).toBe("BUZZ");
    });

    test("4) Test para validar que cuando el score de un explorer es divisible entre 3 y 5,  retorne \"FIZZBUZZ\"", () => {
        const explorer30 = {name: "Explorer30", score: 30};
        const result = FizzbuzzService.applyValidationInExplorer(explorer30);
        expect(result.trick).toBe("FIZZBUZZ");
    });

    // Validaciones para el metodo applyValidationInNumber
    test("5) Test para validar el metodo applyValidationInNumber cuando se recibe un numero 1", () => {
        const result = FizzbuzzService.applyValidationInNumber(1);
        expect(result).toBe(1);
    });

    test("6) Test para validar el metodo applyValidationInNumber cuando se recibe un numero 3", () => {
        const result = FizzbuzzService.applyValidationInNumber(3);
        expect(result).toBe("FIZZ");
    });

    test("7) Test para validar el metodo applyValidationInNumber cuando se recibe un numero 5", () => {
        const result = FizzbuzzService.applyValidationInNumber(5);
        expect(result).toBe("BUZZ");
    });
    
    test("8) Test para validar el metodo applyValidationInNumber cuando se recibe un numero 15", () => {
        const result = FizzbuzzService.applyValidationInNumber(15);
        expect(result).toBe("FIZZBUZZ");
    });
});