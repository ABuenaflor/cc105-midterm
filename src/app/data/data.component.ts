import { Component,Input,OnInit } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
@Input() data?:Data;
@Input() index:number=0;

constructor(private dataService:DataService, private router:Router,private backEndService:BackEndService){}
  ngOnInit(): void {
   console.log(this.data);
  }
  deleteButton(){
    this.dataService.deleteData(this.index);
  }
  editButton(){
    this.router.navigate(['data-edit',this.index]);
  }
  likeButton(): void {
    this.dataService.likeData(this.index);
    this.backEndService.saveData();
  }

  newComment: string = '';
  addComment(){
    if(this.newComment){
   this.dataService.addComment(this.index, this.newComment);
   this.newComment='';
   this.backEndService.saveData();
   this.data?.comments.push(this.newComment);
  }
}
}
