import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.template';
import { resizeHandler } from './table.resize';
// import { shouldResize } from './table.functions';


// import { $ } from '@core/dom';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            // name: 'Table',
            listeners: ['mousedown']
        });
    }

    toHTML() {
        return createTable(20);
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            resizeHandler(this.$root, event);
        }
    }
}

// 820 msScripting
// 852 msRendering