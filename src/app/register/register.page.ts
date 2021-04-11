import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AccessProvider } from '../providers/access-provider';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string = "";
  email: string = "";
  telephone: string = "";
  password: string = "";
  confirm_password: string = "";
  product:any;
  disabledbtn;
  constructor(
    private toastCtrl : ToastController,
    private loadingCtrl : LoadingController,
    private alertCtrl : AlertController,
    private accessProvider : AccessProvider,
    private router : Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledbtn = false;
  }

  async signup() {
    if (this.name == "") {
      this.presentToast('Your name field is empty')
    } else if (this.email == "") {
      this.presentToast('Your email field is empty')
    } else if (this.telephone == "") {
      this.presentToast('Your phone field is empty')
    } else if (this.password == "") {
      this.presentToast('Your password field is empty')
    } else if (this.confirm_password == '') {
      this.presentToast('Your confirm password field is empty')
    } else if (this.password != this.confirm_password) {
      this.presentToast('Your password do not match')
    } else {
      this.disabledbtn = true;
      // this.presentLoading();
      const loader = await this.loadingCtrl.create({
        message: "Please wait ......",
      });
      loader.present();

      return new Promise(resolve => {
        let body = {
          action: 'user_registration',
          name: this.name,
          email: this.email,
          password: this.password,
          telephone: this.telephone,
          confirm_password: this.confirm_password,

        }

        this.accessProvider.postData(body, 'signup_user.php').subscribe((res: any) => {
            if (res.status == 'success') {
              loader.dismiss();
              this.disabledbtn = false;
              this.presentToast(res.msg);
              this.router.navigate(['/login']);
            } else {
              loader.dismiss();
              this.disabledbtn = false;
              this.presentToast(res.msg);
            }
          }, (err) => {
            console.log(err);

            loader.dismiss();
            this.disabledbtn = false;
            this.presentAlert(err);
          }
        );
      })
    }
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: "top"
    });
    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      // cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  }

  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Close',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            //Action
          }
        }, {
          text: 'Try Again',
          handler: () => {
            this.signup();
          }
        }
      ]
    });

    await alert.present();
  }

}
