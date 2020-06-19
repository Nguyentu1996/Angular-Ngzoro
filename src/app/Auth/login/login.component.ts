import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../state/reducers/auth.reducer"; 
import * as fromAction from "../../state/actions/auth.action";
import * as fromSelector from "../../state/selectors/auth.selector";
import { Login } from 'src/app/Model/loginPayload';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private store : Store<fromAuth.AuthState>
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(fromSelector.selectIsAuth)).subscribe(val => {
      if(val){
        
      }
    })
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      passwork: [null, [Validators.required]],
      remember: [true]
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log("",this.validateForm.value);
    let obj : Login = {
      username : this.validateForm.controls.username.value,
      passwork : this.validateForm.controls.passwork.value
    }
    this.store.dispatch(fromAction.login({login:obj}))
  }
}
