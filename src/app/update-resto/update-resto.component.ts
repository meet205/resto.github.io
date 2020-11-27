import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean=false;
  editResto = new FormGroup({
    name: new FormControl(''),
    city: new FormControl('')
  })

  constructor(private router:ActivatedRoute, private resto:RestoService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id,this.router.snapshot.params.data).
    subscribe((result)=>{
     this. editResto = new FormGroup({
        name: new FormControl(result['name']),
        city: new FormControl(result['city'])
      })
    })
  }
  collection(){
    console.log(this.editResto.value)
   this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
    console.log(result);
    this.alert=true;
   })

  }
  closeAlert(){
    this.alert=false;
  }

}
