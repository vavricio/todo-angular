import { TestBed } from '@angular/core/testing';

import { ListRepositoryService } from './list-repository.service';

describe('ListRepositoryService', () => {
  let service: ListRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
