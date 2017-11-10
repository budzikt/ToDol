import { Component } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private httpServ: HttpClient){}

  senrReq(){
    console.log("Requesting");
   this.ask().subscribe((res)=>{
    console.log(res)
  })

  }

 ask(): Observable<any>{
   return this.httpServ.get('http://localhost:8888/notes/5')
 }
}
