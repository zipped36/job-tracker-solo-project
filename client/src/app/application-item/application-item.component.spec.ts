import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationItemComponent } from './application-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ApplicationItemComponent', () => {
  let component: ApplicationItemComponent;
  let fixture: ComponentFixture<ApplicationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationItemComponent],
      imports: [HttpClientTestingModule],
      providers: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
