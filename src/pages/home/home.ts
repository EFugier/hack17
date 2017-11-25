import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivityPage } from "../activity/activity";
import { WalletPage } from "../wallet/wallet";
import { ProfilePage } from "../profile/profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  activityRoot = ActivityPage;
  walletRoot = WalletPage;
  profileRoot = ProfilePage;

  constructor(public navCtrl: NavController) {

  }

}
