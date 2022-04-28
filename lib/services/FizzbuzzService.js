
class FizzbuzzService {

    static applyValidationInExplorer(explorer) {


        if(explorer.score%3 == 0 && explorer.score%5 == 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        else if (explorer.score % 3 == 0) {
            explorer.trick = "FIZZ";
        } 
        else if (explorer.score % 5 == 0) {
            explorer.trick = "BUZZ";
        }  
        else {
            explorer.trick = explorer.score;
        }
        return explorer;
    }

    static applyValidationInNumber(number) {
        
        if (number%3 == 0 && number%5 == 0) {
            number = "FIZZBUZZ";
        }
        
        if (number%3 == 0) {
            number = "FIZZ";
        } else if (number%5 == 0) {
            number = "BUZZ";
        } 
        
        return number;
    }
}

module.exports = FizzbuzzService;