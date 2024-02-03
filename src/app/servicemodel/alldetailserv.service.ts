import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class alldetailservService {

  constructor() { }

  busDetailArr: any[] = [];
  empDetailArr: any[] = [];
  userDetailsArr: any[]=[];
  public updateBusNoVar:String="";
}
