import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessProvider } from '../providers/access-provider';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  id: any;
  resName: any;
  resLoc: any;
  phone: any;
  resEmail: any;

  MenuList: any;

  constructor( 
    private route:ActivatedRoute,
    private accessProvider : AccessProvider,
    ) 
    { 
      this.id;
      this.getRestMenu();
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.resName = params.get('resname');
      this.resLoc = params.get('resloc');
      this.phone= params.get('phone');
      this.resEmail= params.get('email');

   });
   this.getRestMenu();

  }


  getRestMenu() {
    this.accessProvider.getResMenu(this.id)
    .then(data => {
      this.MenuList = JSON.parse(JSON.stringify(data));
      console.log(this.MenuList);
      console.log('Id is ', this.id);
    });
  }



}
