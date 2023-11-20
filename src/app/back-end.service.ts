import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Data } from './data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private dataService:DataService, private http:HttpClient) { }

  saveData(){
    const listofData: Data[]=this.dataService.getData();
    this.http.put('https://cc105a-c3d8e-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',listofData)
    .subscribe((res)=>{console.log(res)
    })
  }
  fetchData():Observable<any>{
    return this.http.get<Data[]>
    ('https://cc105a-c3d8e-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',)
    .pipe
    (tap((listofData: Data[])=>{
      listofData.forEach(data =>{
      if(!Array.isArray(data.comments)){
        data.comments=[];
      }
    });
    this.dataService.setPosts(listofData);
    this.dataService.listChangedEvent.emit(listofData);
      // console.log(listofData)
      // this.dataService.setPosts(listofData);
    }));
    
  }
  
}
