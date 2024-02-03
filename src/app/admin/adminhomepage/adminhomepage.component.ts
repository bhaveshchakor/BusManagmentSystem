import { Component } from '@angular/core';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent {
showThisHomepageComp:number =0;
showComp(temp:any)
{
  this.showThisHomepageComp=temp;
}

routeToUser:number=0;
  getFromAdmin(data:any)
  {
    this.routeToUser=data;
  }
}
