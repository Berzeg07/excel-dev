// import { Dom } from '../../core/dom';

// original *
import { $ } from '@core/dom';

export class Excel {
    constructor(selector, options) {
        // this.$el = document.querySelector(selector);
        // original *
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        // const $root = Dom.$create('div', 'excel');

        // origin *
        const $root = $.create('div', 'excel');
        this.components = this.components.map(Component => {
            //     const $el = Dom.$create('div', Component.className);
            //     const component = new Component($el);
            //     Dom.$html($el, component.toHTML());
            //     $root.append($el);

            // original *
            const $el = $.create('div', Component.className);
            const component = new Component($el);
            $el.html(component.toHTML());
            $root.append($el);
            return component;
        });

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
        this.components.forEach(component => component.init());
    }
}