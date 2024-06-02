import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';
import { HttpClientModule } from '@angular/common/http';

describe('AutenticacionService', () => {
  let service: AutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
