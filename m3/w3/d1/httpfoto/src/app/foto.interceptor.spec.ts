import { TestBed } from '@angular/core/testing';

import { FotoInterceptor } from './foto.interceptor';

describe('FotoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FotoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FotoInterceptor = TestBed.inject(FotoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
