import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationListComponent } from './application-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('ApplicationListComponent', () => {
  let component: ApplicationListComponent;
  let fixture: ComponentFixture<ApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [],
      declarations: [ApplicationListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
