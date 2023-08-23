import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: string, length: number, char: string, replaceChar: string) {

        if(value.length > length) {

            for(let index = 0; index < value.length; index++ ) {
                return value.replaceAll(char, replaceChar).substring(0, length) + ' ...';
            }
        }
        
        return value;
    }
}