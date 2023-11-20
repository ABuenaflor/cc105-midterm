import { EventEmitter, Injectable } from "@angular/core";
import { Data } from "./data.model";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:'root'})

export class DataService{
  constructor(private http:HttpClient){}
  listChangedEvent: EventEmitter<Data[]> = new EventEmitter();
  listofData: Data[]=[]
  //   new Data(
  //     crypto.randomUUID(),
  //     'Ford',
  //     'GT500',
  //     'https://www.fathouseperformance.com/wp-content/uploads/2022/08/IMG_9105-2560x1707-1.jpg',
  //     'available'
  //   ),
  //   new Data(
  //     crypto.randomUUID(),
  //     'Mazda',
  //     'miata',
  //     'https://www.mazda.ph/wp-content/uploads/2020/11/mazdamx5-uvp-image2.jpg',
  //     'out of stock',
  //  )

  getData(){
    return this.listofData;
  }
  deleteData(index: number){
    this.listofData.splice(index,1)
    this.saveData().subscribe();
  }
  addData(data: Data){
    this.listofData.push(data);
    this.saveData();
  }
  updateData(index: number, data: Data){
    this.listofData[index]=data;
    this.saveData();
  }
  getSpecData(index:number){
    return this.listofData[index];

  }
  likeData(index: number): void {
    this.listofData[index].likes++;
  }
  addComment(index: number, comment: string): void {
    if(this.listofData[index] && this.listofData[index].comments){
    this.listofData[index].comments.push(comment);
    this.listChangedEvent.emit(this.listofData);
    this.saveData();
    }
  }
  setPosts(listofData: Data[]){
    this.listofData = listofData;
    this.listChangedEvent.emit(listofData);
  }
  saveData(){
    return this.http.put('https://cc105a-c3d8e-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',this.listofData)
  }
  
}