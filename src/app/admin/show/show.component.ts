import { Component, EventEmitter, Output } from '@angular/core';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  localItem
 constructor(public service :alldetailservService){
  this.localItem = localStorage.getItem("busDetailArr");
  if (this.localItem == null) {
    this.service.busDetailArr=[];}
    else{
    this.service.busDetailArr = JSON.parse(this.localItem);
    }

    this.localItem = localStorage.getItem("empDetailArr");
    if (this.localItem == null) {
      this.service.empDetailArr=[];}
      else{
      this.service.empDetailArr = JSON.parse(this.localItem);
      }

 }
 tempShow:number=0;
 sendData(temp:any)
 {
  this.tempShow=1;
  this.service.updateBusNoVar=temp;
 }
}
