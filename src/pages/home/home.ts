import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMaps, Environment } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '',
      'API_KEY_FOR_BROWSER_DEBUG': ''
    });
    this.map = GoogleMaps.create('map_canvas');
  }

}
