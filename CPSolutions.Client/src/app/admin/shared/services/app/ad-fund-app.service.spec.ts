/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdFundAppService } from './ad-fund-app.service';

describe('Service: AdFundApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdFundAppService]
    });
  });

  it('should ...', inject([AdFundAppService], (service: AdFundAppService) => {
    expect(service).toBeTruthy();
  }));
});
