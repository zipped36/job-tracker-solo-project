import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationFormComponent } from './application-form.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiClientService } from '../services/api-client.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { By } from '@angular/platform-browser';

describe('ApplicationFormComponent', () => {
  let component: ApplicationFormComponent;
  let fixture: ComponentFixture<ApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClientTestingModule,
        FormBuilder,
        ApiClientService,
        RouterTestingModule,
        AuthService,
      ],
      declarations: [ApplicationFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Empty from should be invalid', () => {
    expect(component.applicationForm.valid).toBeFalsy();
  });
  it('company name field validity', () => {
    let companyName = component.applicationForm.controls['companyName'];
    expect(companyName.valid).toBeFalsy();
  });
  it('salary  field validity', () => {
    let salary = component.applicationForm.controls['salary'];
    expect(salary.valid).toBeFalsy();
  });
  it('jobNature  field validity', () => {
    let jobNature = component.applicationForm.controls['jobNature'];
    expect(jobNature.valid).toBeFalsy();
  });
  it('JobLink  field validity', () => {
    let jobLink = component.applicationForm.controls['jobLink'];
    expect(jobLink.valid).toBeFalsy();
  });
  it('jobNature field validity', () => {
    let jobNature = component.applicationForm.controls['jobNature'];
    expect(jobNature.valid).toBeFalsy();
  });
  it('status field validity', () => {
    let status = component.applicationForm.controls['status'];

    expect(status.valid).toBeFalsy();
  });
  it('should disabled attribute on submit button when submit from is invalid', () => {
    const submitButton = fixture.debugElement.query(
      By.css('.submitButton')
    ).nativeElement;
    expect(submitButton.disabled).toBeTrue();
    expect(submitButton.textContent).toContain('Submit');
  });
});
