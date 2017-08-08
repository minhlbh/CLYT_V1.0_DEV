import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'homeFilter',
    pure: false
})
export class HomeFilterPipe implements PipeTransform {
    // private slug = new Slug('vietnamese');
    transform(items: any, filter?: any): any {
        if (!items || !filter) {
            return items;
        }
        // return items.filter(item => item.Ten.indexOf(filter) !== -1);
        // const searchKey = this.slug.slugify(filter.toLowerCase());

        // return items.filter(item =>
        //     this.slug.slugify(item.Ten.toLowerCase()).indexOf(searchKey) !== -1
        // );
    }

}
