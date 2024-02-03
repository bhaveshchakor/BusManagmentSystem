import { Component, Output } from '@angular/core';
import { Employeedetails } from 'src/app/classmodel/employeedetails';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  empDetailobj = {} as Employeedetails;
  constructor(public service:alldetailservService) { }
  submitDet()
  {
    this.service.empDetailArr.push(this.empDetailobj)
    this.empDetailobj = {} as Employeedetails;
    localStorage.setItem("empDetailArr", JSON.stringify(this.service.empDetailArr));
  }
}
