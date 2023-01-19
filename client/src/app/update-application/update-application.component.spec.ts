import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateApplicationComponent } from './update-application.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiClientService } from '../services/api-client.service';
describe('UpdateApplicationComponent', () => {
  let component: UpdateApplicationComponent;
  let fixture: ComponentFixture<UpdateApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [FormBuilder, ApiClientService, HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateApplicationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
