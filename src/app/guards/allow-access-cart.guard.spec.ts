import { TestBed, async, inject } from '@angular/core/testing';

import { AllowAccessCartGuard } from './allow-access-cart.guard';

describe('AllowAccessCartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllowAccessCartGuard]
    });
  });

  it('should ...', inject([AllowAccessCartGuard], (guard: AllowAccessCartGuard) => {
    expect(guard).toBeTruthy();
  }));
});
