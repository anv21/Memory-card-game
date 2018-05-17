const CARD_STATE_HIDDEN = 0;
const CARD_STATE_OPEN = 1;
const CARD_STATE_DISABLED = 2;

class Card {
    constructor(cardFace, image, onClick) {
        this.image = image;
        this.onClick = onClick;
        this.state = CARD_STATE_HIDDEN;
        this.element = document.createElement('div');
        this.face = document.createElement('div');
        this.face.className = 'card__face';
        this.face.style.backgroundImage = `url(${cardFace})`;
        this.img = document.createElement('div');
        this.img.className = 'card__img';
        this.img.style.backgroundImage = `url(${image})`;
        this.element.appendChild(this.face);
        this.element.appendChild(this.img);
        this.element.addEventListener('click', this.onCardClick.bind(this));
        this.render()
    }

    onCardClick() {
        if (this.state === CARD_STATE_HIDDEN) {
            this.onClick(this);
        }
    }

    open() {
        this.state = CARD_STATE_OPEN;
        this.render();
    }

    disable() {
        this.state = CARD_STATE_DISABLED;
        this.render();
    }

    hide() {
        this.state = CARD_STATE_HIDDEN;
        this.render();
    }

    render() {
        this.element.className = 'card';
        if (this.state === CARD_STATE_OPEN) {
            this.element.classList.add('opened');
        } else if (this.state === CARD_STATE_DISABLED) {
            this.element.classList.add('disabled');
        }
    }
}
