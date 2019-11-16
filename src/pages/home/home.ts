import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private inAppBrowser: InAppBrowser,
    private platform: Platform
  ) { }

  ngOnInit(): void {
    this.platform.ready().then(() => {
      const browser = this.inAppBrowser.create('https://ionicframework.com/');
    })
  }

}
