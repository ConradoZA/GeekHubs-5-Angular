import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array:any[]):any[] {
    return array.sort(function(a,b){return(b.popularity - a.popularity)});
  }
}