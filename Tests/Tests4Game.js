describe('Infrastructure validation', () => {
    it('Canary Test', () => {
        expect(true).toBeTruthy();
    });
});

describe('Guessing game test suite', () => {
    it('should fail if a string is returned', () => {
        var referencia = guessingGame(3);
        expect(typeof referencia).not.toBe("string");
    });
    it('should be ok if a number is returned', () => {
        var game = new guessingGame(3);        
        expect(typeof game.play(3)).toBe("number")
    });
    it('same number should not be returned all the time', () => {
        var elementos = new Array();
        var game = new guessingGame(5);
        var allEquals = true;
        for (let index = 0; index < 5; index++) {
            elementos.push(game.genRandom());
            //console.log(elementos[index]);                        
            if(elementos[0]!== elementos[index]){
                allEquals = false;
            }
        }
        expect(allEquals).toBeFalsy();
    });
    it('guessing data should fail if not a number', () => {
        expect(function (){
            var game = new guessingGame("a");
            game.play("a");
        }).toThrowError("You ran out of tries or set the tries limit to 0 or less");
    });
    it('number of tries has to start at 5', () => {
        var game = new guessingGame();
        expect(game.triesLimit).toBe(5);
    });
    it('tries cant be set to 0 or less', () => {
        var game = new guessingGame();        
        expect(function () {
            game.triesLimit = 0;
            game.play(3);
        }).toThrowError("You ran out of tries or set the tries limit to 0 or less");
    });
    it('stop guessing when no more tries', () => {
        var game = new guessingGame();
        console.log("La variable Tries Limit inicia con " + game.triesLimit);
        expect(function () {
            while(game.triesLimit >= 0){
                //console.log(game.triesLimit);
                game.play(1);                
            }
        }).toThrowError("You ran out of tries or set the tries limit to 0 or less");
    });
    it('tries pool should decrease when tried', () => {
        var game = new guessingGame();
        var limiteInicial = game.triesLimit;        
        game.play(3);        
        expect(limiteInicial - 1).toEqual(game.triesLimit);
    });
    it('stop guessing when tell the right number', () => {
        expect().nothing();
    });
    it('no duplicate guessing', () => {
        expect().nothing();
    });

});