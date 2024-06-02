import { TestBed } from '@angular/core/testing';

import { ScrollService } from './scroll.service';
import { HttpClientModule } from '@angular/common/http';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
