import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook,NativeStorage,StatusBar,LocalNotifications } from 'ionic-native';
import { AdBasicPage } from '../ad/adBasic';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public FacebookAppId: number = 321815254870734;
  public error: any = false;
  public geoLocationTracking: Array<string> = [];

  constructor(public navCtrl: NavController) {
  	this.navCtrl = navCtrl;
  	Facebook.browserInit(this.FacebookAppId, "v2.8");

  }
  getLocalNotification()
  {
    LocalNotifications.schedule({
      id: 1,
      text: 'Single Notification',
      sound: 'assets/notification.mp3',
      data: { secret: '123' }
    });
  }
  ngOnInit()
  {
    StatusBar.backgroundColorByHexString('#EEEEEE');


  }

  doFbLogin()
  {
    let permissions = new Array();
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];


    Facebook.login(permissions).then(function(response){
    	alert('logged');
      let userId = response.authResponse.userID;
      let params = new Array();

      //Getting name and gender properties
      Facebook.api("/me?fields=name,gender", params)
      .then(function(user) {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        NativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        })
        .then(function(){
          this.navCtrl.push(AdBasicPage);
        }, function (error) {
          this.error = error;
        })
      })
    }, function(error){
    	alert('logged error');
    	this.error = error;
    });
  }


}
