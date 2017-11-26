import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DRIVES} from '../../mock-data/mock-activities';
/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})

export class ActivityPage {

  drives = DRIVES;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
