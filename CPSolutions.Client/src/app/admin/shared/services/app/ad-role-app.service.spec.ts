/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdRoleAppService } from './ad-role-app.service';

describe('Service: AdRoleApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdRoleAppService]
    });
  });

  it('should ...', inject([AdRoleAppService], (service: AdRoleAppService) => {
    expect(service).toBeTruthy();
  }));
});
