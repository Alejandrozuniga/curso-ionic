import { NgModule } from '@angular/core';
import { DomSanitizerPipe } from './dom-sanitizer/dom-sanitizer';
@NgModule({
	declarations: [DomSanitizerPipe],
	imports: [],
	exports: [DomSanitizerPipe]
})
export class PipesModule {
	
}
