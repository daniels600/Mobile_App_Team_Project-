import { Component, OnInit, ViewChild  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AccessProvider } from '../providers/access-provider';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild('search', {static: false}) search: IonSearchbar;
  public listResNames: any;
  private searchedItem: any;

  listRestaurants: any;

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  constructor(
    private accessProvider : AccessProvider,
    public http: HttpClient,
  ) 
  {
    this.getRest();
    this.getResNames();
    this.searchedItem = this.listResNames;
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    setTimeout(()=> {
      this.search.setFocus;
    });
  }

  getRest() {
    this.accessProvider.getRestaurants()
    .then(data => {
      this.listRestaurants = JSON.parse(JSON.stringify(data));
      console.log(this.listRestaurants);
    });
  }


  getResNames() {
    this.accessProvider.getRestNames()
    .then(data => {
      this.listResNames = JSON.parse(JSON.stringify(data));
      console.log(this.listResNames);
    });
  }


  onSearchChange(event){
    const val  = event.detail.value;

    this.searchedItem = this.listResNames;

    if(val && val.trim() != ''){
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return (item.rest_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  

}
