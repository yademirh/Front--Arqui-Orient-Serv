import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoXdComponent } from './nuevo-xd.component';

describe('NuevoXdComponent', () => {
  let component: NuevoXdComponent;
  let fixture: ComponentFixture<NuevoXdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoXdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoXdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
