import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroHijoComponent } from './otro-hijo.component';

describe('OtroHijoComponent', () => {
  let component: OtroHijoComponent;
  let fixture: ComponentFixture<OtroHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtroHijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtroHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
