import { TestBed } from '@angular/core/testing';

import { NgxGistService } from './ngx-gist.service';

describe('NgxGistService', () => {
  let service: NgxGistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
