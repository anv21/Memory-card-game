class BaseView {

    constructor(container) {
        this.container = container;
    }

    show(opts) {
        this.container.style.display = 'block';
    }

    hide() {
        this.container.style.display = 'none';
    }
}
