import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDetailsComponent } from './application-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiClientService } from '../services/api-client.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('ApplicationDetailsComponent', () => {
  let component: ApplicationDetailsComponent;
  let fixture: ComponentFixture<ApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // faPaperPlane,
        // faArrowLeftLong,
        // faLocationDot,
        // faDollar,
        // faGlobe,
        // faCalendarDays,
        // faBars,
        // faUser,
        // faPaperclip,
        // faRoute,
        // faMapPin,
        HttpClientTestingModule,
        RouterTestingModule,
      ],

      providers: [ApiClientService],
      declarations: [ApplicationDetailsComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
