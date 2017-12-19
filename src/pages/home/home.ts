import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  variableVideo:string;
  constructor(public navCtrl: NavController, private dom:DomSanitizer) {
    this.variableVideo="vxOtI7W6alo";
  }
  

}
