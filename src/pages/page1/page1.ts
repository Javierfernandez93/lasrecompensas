import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Push } from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {

	 //  let push = Push.init({
		//     android: {
		//         senderID: "448366683493"
		//     },
		//     ios: {
		//         alert: "true",
		//         badge: true,
		//         sound: 'false'
		//     },
		//     windows: {}
		// });

		// push.on('registration', (data) => {
		//     console.log(data.registrationId);
		// });

		// push.on('notification', (data) => {
		//     console.log(data.message);
		//     console.log(data.title);
		//     console.log(data.count);
		//     console.log(data.sound);
		//     console.log(data.image);
		//     console.log(data.additionalData);
		// });

		// push.on('error', (e) => {
		//     console.log(e.message);
		// });
  }
}
