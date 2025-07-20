import { Injectable,OnInit } from '@angular/core';
import { Investment} from './data.module';

@Injectable({
  providedIn: 'root'
})
export class Dataserviece {
 private allData : Investment[] =  localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')!) : [] ;

 onAddInvestment(input:Investment){
   this.allData.push(input);
   this.saveData();
 }



 get getData()
 {
   return this.allData;
 }


 private saveData()
 {
   let data: Investment[] = this.allData;
   localStorage.setItem('myData', JSON.stringify(data));
 }
}
