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
        var referencia = guessingGame(3);
        expect(typeof referencia).toBe("number")
    });
    it('same number should not be returned all the time', () => {
        //      expect(12).toEqual(jasmine.any(Number));
        expect().nothing();
    });
    it('guessing data should fail if not a number', () => {
        //Done
        expect(function (){
            guessingGame("a");
        }).toThrowError("Expected a number");
    });
    it('number of tries has to start at 5', () => {
        expect().nothing();
    });
    it('tries cant be 0', () => {
        expect().nothing();
    });
    it('trires cant be negative', () => {
        expect().nothing();
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