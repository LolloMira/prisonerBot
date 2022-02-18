class BaseBot{

    constructor() {
        this.gameHistory = [];
        this._points = 0
    }

    get points(){
        return this._points;
    }

    set points(value){
        this._points = value;
    }

    play(){
        return 0;
    }

    newGame() {
        this.gameHistory = [];
    }

    newGeneration() {
        //optional
    }

    memorize(number) {
        this.gameHistory.push(number)
    }

}

module.exports = BaseBot