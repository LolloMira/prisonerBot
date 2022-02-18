//FIGHT

let p1 = new FancyBot();
let p2 = new FancyBot();
let p3 = new BaseBot();

function battle(bot1, bot2) {
    for (let i = 0; i < 10; i++) {

        let act1 = bot1.play()
        let act2 = bot2.play()

        if (act1 === 1 && act2 === 1) {
            bot1.memorize(act2, 3)
            bot2.memorize(act1, 3)
        }

        if (act1 === 0 && act2 === 0) {
            bot1.memorize(act2, 1)
            bot2.memorize(act1, 1)
        }

        if (act1 === 1 && act2 === 0) {
            bot1.memorize(act2, 0)
            bot2.memorize(act1, 5)
        }

        if (act1 === 0 && act2 === 1) {
            bot1.memorize(act2, 5)
            bot2.memorize(act1, 0)
        }
    } 
    console.log("p1", bot1._points);
    console.log("p2", bot2._points);
    console.log("P1's enemy", bot1.gameHistory);
    console.log("P2's enemy", bot2.gameHistory);
    bot1.newGame()
    bot2.newGame()
}

battle(p1, p2)
battle(p1, p2)
battle(p1, p2)