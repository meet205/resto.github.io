import { Component, OnInit } from '@angular/core';
import { RestoService } from './../resto.service';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
alert:boolean=false
  login = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  collection(){
    console.log(this.login.value);
    this.resto.loginUser(this.login.value).subscribe((result)=>{
      console.log(result)
      this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false;
  }
}
