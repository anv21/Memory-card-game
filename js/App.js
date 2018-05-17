const MAIN_VIEW = '1';
const GAME_OPTION_VIEW = '2';
const GAME_VIEW = '3';
const CONGRATULATIONS_VIEW = '4';
const RATES_VIEW = '5';

const APP_VIEWS = {
    [MAIN_VIEW]: MainView,
    [GAME_OPTION_VIEW]: GameOptionView,
    [GAME_VIEW]: GameView,
    [CONGRATULATIONS_VIEW]: CongratulationsView,
    [RATES_VIEW]: RatesView,
};

class App {
    constructor(viewId, opts) {
        this.views = {};
        this.shownViewId = null;
        this.setView(viewId, opts);
        document.getElementById('home-btn').addEventListener('click', this.onHomeClick.bind(this));
        document.getElementById('top-players-btn').addEventListener('click', this.onTopRateClick.bind(this));
        document.getElementById('new-game-btn').addEventListener('click', this.onNewGameClick.bind(this));

    }

    setView(viewId, opts = {}) {
        if (this.shownViewId !== null) {
            this.views[this.shownViewId].hide();
        }
        if (!(viewId in this.views)) {
            this.views[viewId] = new APP_VIEWS[viewId](this);
        }
        this.views[viewId].show(opts);
        this.shownViewId = viewId;
    }

    readScores() {

        try {
            let arr = JSON.parse(localStorage.getItem('player'));
            if (Array.isArray(arr)) {
                return arr;
            }
        } catch (e) {
        }
        return [];
    }

    saveScores(scores) {
        localStorage.setItem('player', JSON.stringify(scores));
    }

    onHomeClick() {
        this.setView(MAIN_VIEW);
    }

    onTopRateClick() {
        this.setView(RATES_VIEW);
    }

    onNewGameClick() {
        this.setView(GAME_OPTION_VIEW);
    }
}