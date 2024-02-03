import { Component } from '@angular/core';
import { Userdetails } from 'src/app/classmodel/userdetails';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  constructor(public service : alldetailservService){}

userDetObj={} as Userdetails;
register()
{
  if (this.userDetObj.username.length>0 && this.userDetObj.password.length>0)
  {
      window.alert("Registraion Successfull !"+"\n"+"Your username is "+this.userDetObj.username);
      this.service.userDetailsArr.push(this.userDetObj);
     this.userDetObj={} as Userdetails;
     localStorage.setItem("userDetailsArr", JSON.stringify(this.service.userDetailsArr));
  }
  else
  {
    window.alert("username password cannot be blank");
  }

}
}
