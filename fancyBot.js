const BaseBot = require("./baseBot.js")

class FancyBot extends BaseBot {

    constructor() {
        super();
        this.gameHistory = []
    }

    play() {
    }

    
    memorize(number) {
        this.gameHistory.push(number)
    }

}

module.exports = FancyBot