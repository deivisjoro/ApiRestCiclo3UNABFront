import { TestBed } from '@angular/core/testing';

import { AutorizacionLoginGuard } from './autorizacion-login.guard';

describe('AutorizacionLoginGuard', () => {
  let guard: AutorizacionLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutorizacionLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
