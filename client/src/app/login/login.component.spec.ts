import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {} from ''
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LoginComponent],
      providers: [AuthService, FormBuilder, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Empty form should be invalid' , () => {
   expect(component.loginForm.valid).toBeFalsy();
  })
  it('email field validity', () => {
     //let errors = {}
     
    let email = component.loginForm.controls['email'];
    //errors = email.errors || {};
    
    
    expect(email.valid).toBeFalsy();
    //expect(errors['required']).toBeTruthy()
    
    
    
  })
  it('password field validity ', () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();

  })
  // it("submitting a form emits a users", () => {
  //   expect(component.loginForm.valid).toBeFalsy();
  //   component.loginForm.controls['email'].setValue("projectcode1@gamil.com")
  //   component.loginForm.controls['password'].setValue("12345678");
  //   expect(component.loginForm.valid).toBeTruthy()
  //   let user:any
  //   component.handleLogin.subscribe((value) => user = value)
  // })

});
