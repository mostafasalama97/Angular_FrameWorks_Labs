import { Component } from '@angular/core';
import { ForbiddenNameValidator, ConfirmPasswordValidator } from '../../functionForReactiveForm/ts';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiv-regusteration',
  templateUrl: './reactiv-regusteration.component.html',
  styleUrls: ['./reactiv-regusteration.component.scss']
})
export class ReactivRegusterationComponent {
  constructor(private fb:FormBuilder) { }

  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator]],
    password:[''],
    confirmPassword :[''],
    email:[''],
    subscribe:[false],
    alternativeEmails:this.fb.array([]),
    address:this.fb.group({
      state:[''],
      city:[''],
      postalCode:['']
    })
  },{validator:[ConfirmPasswordValidator]})

  get userName()
  {
    return this.registerationForm.get('userName');
  }

  get email()
  {
    return this.registerationForm.get('email');
  }
}
