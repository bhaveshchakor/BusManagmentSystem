import { Component } from '@angular/core';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent {

showCompPage: number=0;
showComp(temp: number)
{
 this.showCompPage=temp;
}

}
