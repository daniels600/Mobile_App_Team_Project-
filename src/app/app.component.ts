import { Component } from '@angular/core';

import {NavController} from "@ionic/angular";
import { Storage } from '@ionic/storage-angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    private router:Router
  ) {
    //this.navCtrl.navigateRoot('/home');
    this.initializeApp();
  }

  initializeApp(){
    this.storage.create();
    this.storage.get('storage_xxx').then((res) =>
    {
      if(res == null){
          this.navCtrl.navigateRoot('/home')
      }else{
          this.navCtrl.navigateRoot('/user-home')
      }
    });
  }


}
