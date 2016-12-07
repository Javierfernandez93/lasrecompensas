import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdAdvancePage } from '../ad/adAdvance';

@Component({
  selector: 'page-adPromo',
  templateUrl: 'adPromo.html'
})

export class AdPromoPage {

  constructor(public navCtrl: NavController) {
  	this.navCtrl = navCtrl;
  }
  goToAdAdvanced()
  {
  	 this.navCtrl.push(AdAdvancePage);
  }
}
