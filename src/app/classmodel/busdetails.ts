import { Time } from "@angular/common";

export class Busdetails {
  number:number=0;
  driver:string="";
  conductor:string="";
  departTime:Time | undefined;
  arriveTime:Time | undefined;
  status:string="yet to update";
}
