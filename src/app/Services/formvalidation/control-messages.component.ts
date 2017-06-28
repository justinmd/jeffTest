import { Component, Input , ElementRef ,Renderer, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormvalidationService } from './formvalidation.service';

@Component({
  selector: 'control-messages',
  styleUrls: ['../../app.component.css'],
  template: `<div class="col-xs-12 errorvalidation" *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  @Input() form : FormGroup;
  setSubmitted;
  
  
  constructor(private el : ElementRef, private render : Renderer) { 
   

  }
  
  get errorMessage() {

    if(this.form){
      this.setSubmitted = this.form['_submitted']
    }

    for (let propertyName in this.control.errors) {
      if ((this.control.errors.hasOwnProperty(propertyName) && this.control.touched || this.setSubmitted )) {
        return FormvalidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);

      }
    }
    
    return null;
  }
}