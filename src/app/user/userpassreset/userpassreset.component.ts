import { Component } from '@angular/core';
import { Userdetails } from 'src/app/classmodel/userdetails';
import { alldetailservService } from 'src/app/servicemodel/alldetailserv.service';

@Component({
  selector: 'app-userpassreset',
  templateUrl: './userpassreset.component.html',
  styleUrls: ['./userpassreset.component.css']
})
export class UserpassresetComponent {
  userDetObj={} as Userdetails
  constructor (public service : alldetailservService){}
  reset()
  {
    for (let i = 0; i < this.service.userDetailsArr.length; i++)
    {
      if (this.userDetObj.username==this.service.userDetailsArr[i].username)
      {
        this.service.userDetailsArr.splice(i,1);
        this.service.userDetailsArr.push(this.userDetObj);
        this.userDetObj={} as Userdetails
        localStorage.setItem("userDetailsArr", JSON.stringify(this.service.userDetailsArr));
        break;
      }
    }
  }
}
