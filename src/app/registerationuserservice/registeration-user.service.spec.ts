import { TestBed } from '@angular/core/testing';

import { RegisterationUserService } from './registeration-user.service';

describe('RegisterationUserService', () => {
  let service: RegisterationUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterationUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
