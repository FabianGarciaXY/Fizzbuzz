
class FizzbuzzService {

    static applyValidationInExplorer(explorer) {

        if (explorer.score % 3 == 0) {
            return explorer.score = 'FIZZ'
        } else if (explorer.score % 5 == 0) {
            explorer.score = 'BUZZ'
        } else if(explorer.score%3 == 0 && explorer.score%5 == 0)
            explorer.score = 'FIZZBUZZ'
        else {
            explorer.score = explorer.score
        }
    }
}

const explorer1 = {name: "Explorer1", score: 3}
console.log(FizzbuzzService.applyValidationInExplorer(explorer1))


module.exports = FizzbuzzService