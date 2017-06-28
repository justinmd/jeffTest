import { Injectable } from '@angular/core';
import { NgForm,FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Injectable()
export class FormvalidationService {

 constructor( ) { }
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
   
        let config = {
            'required': 'Required',
            'invalidEmailAddress': 'Invalid email address',
            'invalidName': 'Only characters allowed',
            'invalidNumber' : 'Not a valid Number',
            'invalidPhoneNumber' : 'Not a valid Phone Number'       
        };
        return config[validatorName];
    }

  validateEmail(c: FormControl) {
  	
	  let EMAIL_REGEXP =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	  return EMAIL_REGEXP.test(c.value) ? null : { 
	  	invalidEmailAddress : true
	  };
	}
	validateName(c: FormControl) {
	  let NAME_REGEXP =/^[a-zA-Z]+$/;
	  return NAME_REGEXP.test(c.value) ? null : { 
	  	invalidName : true
	  };
	}

	validateNumber(c: FormControl){
		let NUMBER_REGEXP = /^[0-9]+$/;
		return NUMBER_REGEXP.test(c.value) ? null : { 
	  	  invalidNumber : true
	  };
	}
	validatePhoneNumber(c: FormControl){
		let PHONE_REGEXP = /^\d{10}$/;
		return PHONE_REGEXP.test(c.value) ? null : { 
	  	  invalidPhoneNumber : true
	  };
	}



}


