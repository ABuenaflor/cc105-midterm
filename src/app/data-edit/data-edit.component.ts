import { Component } from '@angular/core';
import { FormControl,FormGroup,FormGroupDirective,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router,Params,ActivatedRoute } from '@angular/router';
import { Data } from '../data.model';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent {
  form!:FormGroup;
  index:number=0;
  editmode=false;

  constructor(private dataService:DataService,private router:Router,private actroute:ActivatedRoute, private backEndService:BackEndService){}

  ngOnInit():void{
    let brand="";
    let model="";
    let imagePath="";
    let status="";
    this.actroute.params.subscribe((params:Params)=>{
      if(params['index']){
        this.index=params['index'];
        const postSpec=this.dataService.getSpecData(this.index);
        brand=postSpec.brand;
        model=postSpec.model;
        imagePath=postSpec.imagePath;
        status=postSpec.status;
        this.editmode=true;
      }
    }
    );
    this.form=new FormGroup({
      brand:new FormControl(brand, [Validators.required]),
      model:new FormControl(model, [Validators.required]),
      imagePath:new FormControl(imagePath, [Validators.required]),
      status:new FormControl(status, [Validators.required])
    });
  }
  onsubmit(){

  }
  onSubmit(){
    const id = crypto.randomUUID();
    const brand=this.form.value.brand;
    const model=this.form.value.model;
    const imagePath=this.form.value.imagePath;
    const status=this.form.value.status;
    const likes=0;
    
    
    let comments: string[] = [];
    if (this.editmode) {
      comments = this.dataService.getSpecData(this.index).comments;
    }

    const data: Data= new Data(id,brand,model,imagePath,status,likes,comments);
    if(this.editmode==true){
     this.dataService.updateData(this.index, data);
     this.backEndService.saveData();
     alert('An Entry has been Submitted');
    }
    else{
     this.dataService.addData(data);
     this.backEndService.saveData();
     alert('An Entry has been Submitted');
    }
     this.router.navigate(['datatable'])
   }
}
