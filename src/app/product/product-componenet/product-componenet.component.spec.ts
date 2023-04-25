import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponenetComponent } from './product-componenet.component';

describe('ProductComponenetComponent', () => {
  let component: ProductComponenetComponent;
  let fixture: ComponentFixture<ProductComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
