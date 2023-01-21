import { TestBed } from '@angular/core/testing';

import { ActualizarDBService } from './actualizar-db.service';

describe('ActualizarDBService', () => {
  let service: ActualizarDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
