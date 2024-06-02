import { TestBed } from '@angular/core/testing';

import { CarritoService } from './carrito.service';
import { HttpClientModule } from '@angular/common/http';

describe('CarritoService', () => {
  let service: CarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
