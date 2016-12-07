import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdBasicPage } from '../ad/adBasic';

@Component({
  selector: 'page-ad',
  templateUrl: 'ad.html'
})

export class AdPage {

  constructor(public navCtrl: NavController) {
  	this.navCtrl = navCtrl;
  }

  goToAdBasic()
  {
  	this.navCtrl.push(AdBasicPage);
  }
}
