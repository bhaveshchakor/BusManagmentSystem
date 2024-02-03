import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Employeedetails } from 'src/app/classmodel/employeedetails';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  isValidUser:number=0;
  @Output() sendDataToParent = new EventEmitter<any>;
  constructor (public service : alldetailservService){}
  adminDetObj= {} as Employeedetails
  loginData(username:any, password:any)
  {
    if (username.toUpperCase()=="A" && password.toUpperCase()=="A")
    {
      this.isValidUser=1;
    }
    else
    {
      window.alert("Wrong login credential")
    }
  }

}


