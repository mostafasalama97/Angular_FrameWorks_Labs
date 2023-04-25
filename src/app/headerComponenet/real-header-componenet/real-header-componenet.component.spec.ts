import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealHeaderComponenetComponent } from './real-header-componenet.component';

describe('RealHeaderComponenetComponent', () => {
  let component: RealHeaderComponenetComponent;
  let fixture: ComponentFixture<RealHeaderComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealHeaderComponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealHeaderComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
