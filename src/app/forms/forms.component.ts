import { Component, OnInit, ElementRef , Input, HostListener, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormvalidationService } from '../Services/formvalidation/formvalidation.service';
import { ControlMessagesComponent } from '../Services/formvalidation/control-messages.component';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

 form: FormGroup;
  password;
  data;
  constructor(private fb: FormBuilder, private formvalidationservice:FormvalidationService, private renderer: Renderer, private el: ElementRef) {
     this.form = this.fb.group({
      email: new FormControl('',Validators.compose([Validators.required,this.formvalidationservice.validateEmail])),
      firstname: new FormControl('', Validators.compose([ Validators.required, this.formvalidationservice.validateName])),
       lastname: new FormControl('', Validators.compose([ Validators.required, this.formvalidationservice.validateName])),
       phone:    new FormControl('', Validators.compose([ Validators.required, this.formvalidationservice.validatePhoneNumber])),

    });
    
    }
  
  ngOnInit() {
  
  }

  onSubmit(f){
   
  /*if (f.dirty && f.valid) {
    console.log("Login successful")

   }
   else{

   }*/
   console.log(this.data=f)
 }
}

