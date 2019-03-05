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
            console.log(elementos[index]);                        
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
        }).toThrowError("Expected a number more than 0");
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
        }).toThrowError("Expected a number more than 0");
    });
    it('stop guessing when no more tries', () => {
        expect().nothing();
    });
    it('tries pool should decrease when tried', () => {
        expect().nothing();
    });
    it('stop guessing when tell the right number', () => {
        expect().nothing();
    });
    it('no duplicate guessing', () => {
        expect().nothing();
    });

});