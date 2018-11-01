import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeatherAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather-app',
  templateUrl: 'weather-app.html',
})
export class WeatherAppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherAppPage');
  }

  refresh_click(){
    console.log('Refresh was clicked');
  }
  
  locate_click(){
    console.log('Locate was clicked');
  }
  
  search_click(){
    console.log('Search was clicked');
  }
  
  
}
