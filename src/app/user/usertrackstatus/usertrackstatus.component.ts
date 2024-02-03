import { Component } from '@angular/core';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';

@Component({
  selector: 'app-usertrackstatus',
  templateUrl: './usertrackstatus.component.html',
  styleUrls: ['./usertrackstatus.component.css']
})
export class UsertrackstatusComponent {
  localItem
  constructor(public service: alldetailservService) {
    this.localItem = localStorage.getItem("busDetailArr");
  if (this.localItem == null) {
    this.service.busDetailArr=[];}
    else{
    this.service.busDetailArr = JSON.parse(this.localItem);
    }
  }

  showStatus(num: any)
  {
   var cnt:Number=0;
    for (let i = 0; i < this.service.busDetailArr.length; i++)
    {
      if (this.service.busDetailArr[i].number == num)
      {
        cnt=1;
      }
    }
    if (cnt==0) {
      window.alert("Enter valid bus number");
    }
  }
}
