class CongratulationsView extends BaseView  {

    constructor(app) {
        super(document.getElementById('congratulations'));
        this.app = app;
        document.getElementById('congratulations-btn-new-game').addEventListener('click', this.onNewGameClick.bind(this));
        document.getElementById('congratulations-btn-top').addEventListener('click', this.onGoToTopClick.bind(this));
    }

    show(opts) {
        super.show(opts);
        this.greet = document.getElementById('congratulation__greet');
         this.greet.innerHTML = 'You win, ' + opts.firstName + ' ' + opts.lastName + '!';

        this.time = document.getElementById('congratulation__score');
        this.time.innerHTML = 'Your time is ' + opts.time + ' ' + 'sec';
    }

    onNewGameClick() {
        this.app.setView(MAIN_VIEW);
    }

    onGoToTopClick() {
        this.app.setView(RATES_VIEW);
    }
}
