import { Component } from '@angular/core';
import { Busdetails } from 'src/app/classmodel/busdetails';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent {

 busDetailObj = {} as Busdetails
 constructor(public service:alldetailservService){}
 submitDet()
 {
   this.service.busDetailArr.push(this.busDetailObj);
   this.busDetailObj = {} as Busdetails
   localStorage.setItem("busDetailArr", JSON.stringify(this.service.busDetailArr));
 }
}
