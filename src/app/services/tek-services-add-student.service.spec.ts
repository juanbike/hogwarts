import { TestBed } from '@angular/core/testing';

import { TekServicesAddStudentService } from './tek-services-add-student.service';

describe('TekServicesAddStudentService', () => {
  let service: TekServicesAddStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TekServicesAddStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
