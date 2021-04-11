import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AccessProvider } from '../providers/access-provider';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  datastorage:any;
  email:any;
  name:any;

  constructor(
    private router:Router,
    private toastCtrl : ToastController,
    public navCtrl : NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    //this.storage.clear();
    this.storage.get('storage_xxx').then((res)=>{
      console.log(res);
      this.datastorage = res;
      this.email = this.datastorage.user_email;
      this.name = this.datastorage.user_name;
    })
  }

  async logout(){
    this.storage.clear();
    await this.router.navigate(['/home']);

    const toast = await this.toastCtrl.create({
      message: "Logged Out Successfully",
      duration: 2000,
      position: "top"
    });
    await toast.present();
  }


}
