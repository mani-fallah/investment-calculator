import { Injectable } from '@angular/core';
import { Investment} from './data.module';

@Injectable({
  providedIn: 'root'
})
export class Dataserviece {
 private allData : Investment[] = [] ;

 onAddInvestment(input:Investment){
   this.allData.push(input);
 }

 get getData()
 {
   return this.allData;
 }

}
