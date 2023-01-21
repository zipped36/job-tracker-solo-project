import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { By } from '@angular/platform-browser';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientTestingModule],
      providers: [HttpClientTestingModule, FormBuilder, AuthService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Empty from should be invalid', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('full name name field validity', () => {
    let fullName = component.registerForm.controls['fullName'];
    expect(fullName.valid).toBeFalsy();
  });
  it('email  field validity', () => {
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });
  it('password  field validity', () => {
    let password = component.registerForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });
  it('phoneNumber field validity', () => {
    let jobLink = component.registerForm.controls['phoneNumber'];
    expect(jobLink.valid).toBeFalsy();
  });
  it('confirmPassword field validity', () => {
    let confirmPassword = component.registerForm.controls['confirmPassword'];
    expect(confirmPassword.valid).toBeFalsy();
  });

  it('should disabled attribute on submit button when submit from is invalid', () => {
    const registerButton = fixture.debugElement.query(
      By.css('.sigUpButton')
    ).nativeElement;
    expect(registerButton.disabled).toBeTrue();
    expect(registerButton.textContent).toContain('Register');
  });
});
