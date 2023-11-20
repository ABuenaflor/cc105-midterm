import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor (private backendService:BackEndService){

  }
  ngOnInit(): void {}

  onFetch(){
    this.backendService.fetchData();
  }

}
