import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the DomSanitizerPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'domSanitizer',
})
export class DomSanitizerPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(private domSanitizer:DomSanitizer){
  
  }
  transform(value: string, url:string) :any{
    return   this.domSanitizer.bypassSecurityTrustResourceUrl(url+value);
  }
}
