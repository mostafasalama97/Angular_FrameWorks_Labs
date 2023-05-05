import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivRegusterationComponent } from './reactiv-regusteration.component';

describe('ReactivRegusterationComponent', () => {
  let component: ReactivRegusterationComponent;
  let fixture: ComponentFixture<ReactivRegusterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivRegusterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivRegusterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
