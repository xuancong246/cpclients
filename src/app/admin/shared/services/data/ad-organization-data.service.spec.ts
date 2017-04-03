/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdOrganizationDataService } from './ad-organization-data.service';

describe('Service: AdOrganizationData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdOrganizationDataService]
    });
  });

  it('should ...', inject([AdOrganizationDataService], (service: AdOrganizationDataService) => {
    expect(service).toBeTruthy();
  }));
});
