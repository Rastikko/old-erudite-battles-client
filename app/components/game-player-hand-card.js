import Component from '@ember/component';

export default Component.extend({
    classNames: ['game-player-hand-card', 'card', 'h-100'],

    didInsertElement() {
        this._super(...arguments);
    },
});