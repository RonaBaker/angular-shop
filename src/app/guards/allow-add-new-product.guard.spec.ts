import { TestBed, async, inject } from '@angular/core/testing';

import { AllowAddNewProductGuard } from './allow-add-new-product.guard';

describe('AllowAddNewProductGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllowAddNewProductGuard]
    });
  });

  it('should ...', inject([AllowAddNewProductGuard], (guard: AllowAddNewProductGuard) => {
    expect(guard).toBeTruthy();
  }));
});
