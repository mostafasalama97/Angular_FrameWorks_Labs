import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInterfaceComponent } from './post-interface.component';

describe('PostInterfaceComponent', () => {
  let component: PostInterfaceComponent;
  let fixture: ComponentFixture<PostInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
