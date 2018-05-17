class MainView extends BaseView {

    constructor(app) {
        super(document.getElementById('start-game'));
        this.app = app;
        document.getElementById('start-btn').addEventListener('click', this.onStartClick.bind(this));
    }

    onStartClick() {
        this.app.setView(GAME_OPTION_VIEW);
    }
}
