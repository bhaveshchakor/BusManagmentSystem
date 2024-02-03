import { Component, Input, OnInit } from '@angular/core';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Busdetails } from 'src/app/classmodel/busdetails';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent{

  constructor(public service: alldetailservService) { }

  isShowComp=0;
  updateBusDetailObj = {} as Busdetails
  updateBusInfo(num: any) {

    for (let i = 0; i < this.service.busDetailArr.length; i++)
    {
      if (this.service.busDetailArr[i].number == num)
      {
        this.service.busDetailArr.splice(i,1)
        this.updateBusDetailObj.number=num;
        this.service.busDetailArr.push(this.updateBusDetailObj);
        this.updateBusDetailObj = {} as Busdetails
        localStorage.setItem("busDetailArr", JSON.stringify(this.service.busDetailArr));
        this.isShowComp=1;
        break;
      }
    }
  }


}
