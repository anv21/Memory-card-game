class GameOptionView extends BaseView  {

    constructor(app) {
        super(document.getElementById('game-options'));
        this.app = app;
        document.getElementsByClassName('game-options__form')[0]
            .addEventListener('submit', this.onStartGameClick.bind(this));
    }

    onStartGameClick(event) {
        event.preventDefault();
        this.app.setView(GAME_VIEW, {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            cardFace: document.querySelector('input[name="faceCard"]:checked').value,
            difficulty: parseInt(document.getElementById('difficulty').value, 10)
        });
    }
}