import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationStatisticsComponent } from './job-application-statistics.component';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

describe('JobApplicationStatisticsComponent', () => {
  let component: JobApplicationStatisticsComponent;
  let fixture: ComponentFixture<JobApplicationStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [faFileLines, faPlus, faClock, faListCheck],
      declarations: [JobApplicationStatisticsComponent],
      providers:[]
    }).compileComponents();

    fixture = TestBed.createComponent(JobApplicationStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
