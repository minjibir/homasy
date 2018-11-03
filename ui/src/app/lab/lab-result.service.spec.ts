import { TestBed, inject } from '@angular/core/testing';

import { LabResultService } from './lab-result.service';

describe('LabResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabResultService]
    });
  });

  it('should be created', inject([LabResultService], (service: LabResultService) => {
    expect(service).toBeTruthy();
  }));
});
