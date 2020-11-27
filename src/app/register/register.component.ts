import { RestoService } from './../resto.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
alert: boolean=false;

  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
collection(){
  console.log(this.register.value);
  this.resto.registerUser(this.register.value).subscribe((result)=>{
    console.log(result)
    this.alert=true;
  })
}
closeAlert(){
  this.alert=false;
}
}
