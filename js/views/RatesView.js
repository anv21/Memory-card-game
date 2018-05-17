class RatesView extends BaseView {
    constructor(app) {
        super(document.getElementById('rates'));
        this.app = app;
        document.getElementById('backtogame-btn').addEventListener('click', this.onGoBackToGameClick.bind(this));
        this.ratesContainer = document.getElementById('top-rates');

    }

    show(opts) {
        super.show(opts);
        const scores = this.app.readScores();
        if (scores.length > 0) {
            const ratesList = ['<ol>'];
            this.ratesContainer.innerHTML = '<ul>';
            this.app.readScores().forEach((score) => {
                ratesList.push(`<li>${score.firstName} ${score.lastName} - ${score.time}</li>`)
            });
            ratesList.push('</ul>');

            this.ratesContainer.innerHTML = ratesList.join('');
        } else {
            this.ratesContainer.innerHTML = 'There is no rates';
        }
    }

    onGoBackToGameClick() {
        this.app.setView(MAIN_VIEW);
    }
}