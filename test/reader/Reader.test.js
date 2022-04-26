
const Reader = require('./../../lib/utils/Reader')
const explorers = Reader.readJsonFile('explorers.json')

describe('Tests para la clase Reader', () => {

    test('1) Comprobando la lista de explorers', () => {
        expect(explorers).not.toBeUndefined()
    })
    test('2) Validando explorers sea un array de tamaño 15', () => {
        expect(explorers.length).toBe(15)
    })
    
})
