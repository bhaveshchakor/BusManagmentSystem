import { Component } from '@angular/core';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';

@Component({
  selector: 'app-trackstatus',
  templateUrl: './trackstatus.component.html',
  styleUrls: ['./trackstatus.component.css']
})
export class TrackstatusComponent {
  localItem
  constructor(public service: alldetailservService) {

    this.localItem = localStorage.getItem("busDetailArr");
  if (this.localItem == null) {
    this.service.busDetailArr=[];}
    else{
    this.service.busDetailArr = JSON.parse(this.localItem);
    }
  }
  showStatus(num: any) {
    var cnt=0;
    for (let i = 0; i < this.service.busDetailArr.length; i++) {
      if (this.service.busDetailArr[i].number == num) {
       cnt++;
       break;
      }
    }
    if (cnt==0) {
      window.alert("Enter Valid Bus Number !")
    }
  }
  changeStatus(busNo: number, event: any) {
      for (let i = 0; i < this.service.busDetailArr.length; i++)
    {
      let data = event.target.value;
      if (this.service.busDetailArr[i].number == busNo)
      {
        if (data == undefined) {
          this.service.busDetailArr[i].status = "";
          localStorage.setItem("busDetailArr", JSON.stringify(this.service.busDetailArr));
        }
        else if (data == 1) {
          this.service.busDetailArr[i].status = "Yet to Depart";
          localStorage.setItem("busDetailArr", JSON.stringify(this.service.busDetailArr));
        }
        else if (data == 2) {
          this.service.busDetailArr[i].status = "On Track";
          localStorage.setItem("busDetailArr", JSON.stringify(this.service.busDetailArr));
        }
        else if (data == 3) {
          this.service.busDetailArr[i].status = "Cancelled";
          localStorage.setItem("busDetailArr", JSON.stringify(this.service.busDetailArr));
        }
      }
    }
  }
}
