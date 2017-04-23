/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdUserAppService } from './ad-user-app.service';

describe('Service: AdUserApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdUserAppService]
    });
  });

  it('should ...', inject([AdUserAppService], (service: AdUserAppService) => {
    expect(service).toBeTruthy();
  }));
});
