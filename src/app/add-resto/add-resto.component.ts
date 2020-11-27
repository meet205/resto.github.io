import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
   addResto = new FormGroup({
    name: new FormControl(''),
    city: new FormControl('')
  })


  constructor(private resto:RestoService) { }
  alert:boolean=false

  ngOnInit(): void {
  }
collectResto()
{

  this.resto.saveResto(this.addResto.value).subscribe((result)=>{
   this.alert=true;
  })
}
closeAlert(){
  this.alert=false;
}
}
