import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'homeFilter',
    pure: false
})
export class HomeFilterPipe implements PipeTransform {

    transform(items: any, filter?: any): any {
        if (!items || !filter) {
            return items;
        }

        // return items.filter(item => item.Ten.indexOf(filter) !== -1);
        return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }

}
