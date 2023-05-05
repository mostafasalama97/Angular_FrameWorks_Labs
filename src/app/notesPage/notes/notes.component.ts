import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ForbiddenNameValidator, ConfirmPasswordValidator } from 'src/app/functionForReactiveForm/ts';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
[x: string]: any;
  constructor(private fb:FormBuilder) { }
  // submitted : boolean = false;
  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator]],
    dropList:['angular' , 'react' , 'vue'],
    hasDiscount:[false],
    comment:[''],
    addedComment:this.fb.array([]),
    })

    get addedComment(){
      return this.registerationForm.get('addedComment') as unknown as FormArray;
    }
    addNewcomment()
    {
      this.addedComment.push(this.fb.control(''));
    }
  get userName()
  {
    return this.registerationForm.get('userName');
  }
  get hasDiscount() {
    return this.registerationForm.get('hasDiscount');
  }
  onDiscountChange() {
    const discountCtrl = this.registerationForm.get('discount');
    if (this.hasDiscount?.value) {
      discountCtrl?.enable();
    } else {
      discountCtrl?.disable();
    }
  }
  get comment()
  {
    return this.registerationForm.get('email');
  }
  ngOnInit(): void {
  }

}

