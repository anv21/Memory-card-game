const CARDS = [
    {image: './img/005-hand.png', name: "hand"},
    {image: "./img/008-mushroom.png", name: "mushroom"},
    {image: "./img/011-dragon-1.png", name: "dragon"},
    {image: "./img/014-alien.png", name: "alien"},
    {image: "./img/016-madre-monte.png", name: "madre-monte"},
    {image: "./img/018-karakasakozou.png", name: "karakasakozou"},
    {image: "./img/020-werewolf.png", name: "werewolf"},
    {image: "./img/022-valkyrie.png", name: "valkyrie"},
    {image: "./img/024-loch-ness-monster.png", name: "loch-ness-monster"},
    {image: "./img/025-tree.png", name: "tree"},
    {image: "./img/026-cerberus.png", name: "cerberus"},
    {image: "./img/029-vampire.png", name: "vampire"},
    {image: "./img/030-goblin.png", name: "goblin"},
    {image: "./img/034-chimera.png", name: "chimera"},
    {image: "./img/035-elf.png", name: "elf"},
    {image: "./img/036-hydra.png", name: "hydra"},
    {image: "./img/038-pegasus.png", name: "038-pegasus.png"},
    {image: "./img/039-narwhal.png", name: "narwhal"},
    {image: "./img/040-woodcutter.png", name: "woodcutter"},
    {image: "./img/041-zombie.png", name: "zombie"},
];

class Game {
    constructor(difficulty, cardFace, onGameEnd, container) {
        this.onGameEnd = onGameEnd;
        let randomCards = CARDS.sort(() => 0.5 - Math.random())
            .slice(0, difficulty);
        randomCards = randomCards.concat(randomCards).sort(() => 0.5 - Math.random());
        this.cards = randomCards.map(({image}) => new Card(cardFace, image, this.onCardClick.bind(this)));
        this.cards.forEach((card) => {
            container.appendChild(card.element);
        });

        this.openedCards = [];
        this.lastCards = this.cards.length;
    }

    onCardClick(card) {
        if (!this.closeAnimationId) {
            card.open();
            this.openedCards.push(card);
            if (this.openedCards.length === 2) {
                this.closeAnimationId = setTimeout(() => {
                    if (this.openedCards[0].image === this.openedCards[1].image) {
                        this.openedCards.forEach(c => c.disable());
                        this.lastCards -= 2;
                        if (this.lastCards === 0) {
                            this.onGameEnd();
                        }
                    } else {
                        this.openedCards.forEach(c => c.hide());
                    }
                    this.openedCards = [];

                    this.closeAnimationId = null;
                }, 1000);
            }
        }
    }
}
