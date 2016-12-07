import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { Geolocation,StatusBar } from 'ionic-native';
import { AdPromoPage } from '../ad/adPromo';

declare var google;

@Component({
  selector: 'page-adBasic',
  templateUrl: 'adBasic.html'
})

export class AdBasicPage {
	@ViewChild('map') mapElement: ElementRef;
  public map: any;
  public myPosition: any;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
  	this.loadingCtrl = loadingCtrl;
  	this.navCtrl = navCtrl;
  }
  ngOnInit(){
	  this.presentLoading();
	  this.loadMap();
  }

  goToAdPromo()
  {
  	this.navCtrl.push(AdPromoPage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Tomando su ubicación",
      duration: 3000
    });
    loader.present();
  }

  loadMap()
  {
    Geolocation.getCurrentPosition({enableHighAccuracy:true}).then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.myPosition = {lat: position.coords.latitude, lng: position.coords.longitude};

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
    }, (err) => {
      console.log(err);
    });

  }
 	addMarker(){

	  let marker = new google.maps.Marker({
	    map: this.map,
	    animation: google.maps.Animation.DROP,
	    position: this.myPosition
	    // position: this.map.getCenter()
	  });

	  console.log(this.map.getCenter())

	  let content = "<h4>Information!</h4>";

	  this.addInfoWindow(marker, content);

	}
	addInfoWindow(marker, content){
	  let infoWindow = new google.maps.InfoWindow({
	    content: content
	  });

	  google.maps.event.addListener(marker, 'click', () => {
	    infoWindow.open(this.map, marker);
	  });
	}
}
