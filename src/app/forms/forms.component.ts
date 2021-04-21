import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  // USING FORM GROUP

  // userProfileForm = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl(''),
  //   age: new FormControl(''),
  //   email: new FormControl(''),
  //   address: new FormGroup({
  //     add1: new FormControl(''),
  //     add2: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })



  // USING FORM BUILDER

  constructor(private fb : FormBuilder) {}

  userProfileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    age: [''],
    email: [''],
    address: this.fb.group({
      add1: [''],
      add2: [''],
      state: [''],
      zip: ['']
    }),
    mobile: this.fb.array([this.fb.control('')])
  })

  get mobiles(){ return this.userProfileForm.get('mobile') as FormArray }
  addNewMobile(){
    this.mobiles.push(this.fb.control(''))
  }



  onSubmitFormGroup(){
    console.log('Group data :: ', this.userProfileForm.value)
    console.log('Individual input box content :: ', this.userProfileForm.get('firstName').value)
    console.log('Individual input box content :: ', this.userProfileForm.controls['firstName'].value)
    console.log('Nested input box content :: ', this.userProfileForm.get(['address','add1']).value)
    // this.userProfileForm.get('lastName').setValue('Angular 8')
  }

  updatePartially(){
    this.userProfileForm.patchValue({
      firstName : 'Tanisha',
      address : { add1 : 'M303, The Mega Zone' }
    })
  }

  ngOnInit(): void {}
}
