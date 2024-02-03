import { Component, EventEmitter, Output } from '@angular/core';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  localItem
  constructor (public service : alldetailservService){

    this.localItem = localStorage.getItem("userDetailsArr");
    if (this.localItem == null) {
      this.service.userDetailsArr=[];}
      else{
      this.service.userDetailsArr = JSON.parse(this.localItem);
      }
  }
  isValidUser:number=0;
  @Output() sendDataToParent = new EventEmitter<any>;

  routeToUser:number=0;
  @Output() sendToUser = new EventEmitter<any>;

  loginData(username:any, password:any)
  {
    var cnt:number=0;
      for (let i = 0; i < this.service.userDetailsArr.length; i++)
      {
        if (username==this.service.userDetailsArr[i].username && password== this.service.userDetailsArr[i].password)
        {
              this.isValidUser=1;
              cnt=1;
        }
      }
      if (cnt==0)
      {
        window.alert("Wrong login credentials");
      }
  }





}
