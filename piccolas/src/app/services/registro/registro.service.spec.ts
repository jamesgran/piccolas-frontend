import { TestBed } from '@angular/core/testing';

import { RegistroService } from './registro.service';
import { HttpClientModule } from '@angular/common/http';

describe('RegistroService', () => {
  let service: RegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
