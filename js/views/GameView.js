class GameView extends BaseView {
    constructor(app) {
        super(document.getElementById('game'));
        this.app = app;
        this.gameTime = document.getElementsByClassName('game__time')[0];
        this.mainContainer = document.getElementsByClassName('game__main')[0]
    }

    show(opts) {
        super.show(opts);
        this.opts = opts;
        this.gameContainer = document.createElement('div');
        this.gameContainer.classList.add('game__table');
        this.mainContainer.appendChild(this.gameContainer);
        new Game(opts.difficulty, opts.cardFace, this.onGameEnd.bind(this), this.gameContainer);
        clearInterval(this.timeIntervalId);
        this.time = 0;
        this.gameTime.innerHTML = 0 + ' sec';
        this.timeIntervalId = setInterval(() => {
            this.time += 1;
            this.gameTime.innerHTML = this.time + ' sec';
        }, 1000);
    }

    hide() {
        super.hide();
        this.gameContainer.remove();
    }

    onGameEnd() {
        this.app.setView(CONGRATULATIONS_VIEW, {
            firstName: this.opts.firstName,
            lastName: this.opts.lastName,
            time: this.time
        });

        clearInterval(this.timeIntervalId);

        let score = this.app.readScores();
        score.push({firstName: this.opts.firstName, lastName: this.opts.lastName, time: this.time});
        score.sort((a, b) => a.time - b.time);
        if (score.length > 10) {
            score = score.slice(0, 10);
        }
        this.app.saveScores(score);
    }
}
