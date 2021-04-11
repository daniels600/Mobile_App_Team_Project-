import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AccessProvider } from '../providers/access-provider';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";
  disabledbtn;

  constructor(
    private router:Router,
    private toastCtrl : ToastController,
    private loadingCtrl : LoadingController,
    private alertCtrl : AlertController,
    private accessProvider : AccessProvider,
    public navCtrl : NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }
  openRegister() {
    this.router.navigate(['/register'])
  }

  ionViewDidEnter(){
    this.disabledbtn = false;
  }

  async login_user() {
    if (this.email == "") {
      this.presentToast('Your email field is empty')
    }else if (this.password == "") {
      this.presentToast('Your password field is empty')
    }else {
      this.disabledbtn = true;
      // this.presentLoading();
      const loader = await this.loadingCtrl.create({
        message: "Please wait ......",
      });
      loader.present();

      return new Promise(resolve => {
        let body = {
          action: 'user_login',
          email: this.email,
          password: this.password,

        }

        this.accessProvider.checkLogin(body, 'login_user.php').subscribe((res: any) => {
            if (res.status == 'success') {
              loader.dismiss();
              this.disabledbtn = false;
              this.presentToast(res.msg);
              this.storage.set('storage_xxx', res.result);  //storage session
              this.navCtrl.navigateRoot(['user-home']);
            } else {
              loader.dismiss();
              this.disabledbtn = false;
              this.presentToast(res.msg);
            }
          }, (err) => {
            console.log(err);

            loader.dismiss();
            this.disabledbtn = false;
            //this.presentAlert(err);
          }
        );
      })
    }
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "top"
    });
    await toast.present();
  }
}
