import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusMgmtSystem';

  isShowComp: number = 0;
  showComponent(temp: number) {
    this.isShowComp = temp;
  }

  isValidUser: number = 0;
  getFromChild(data: any) {
    this.isValidUser = data;
  }
  userLog: number = 0;
  login(num: any) {
    this.userLog = num;
  }
}
