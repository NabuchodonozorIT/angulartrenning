import {TestBed, async, inject} from '@angular/core/testing';

import {EngineersTrashGuard} from './engineers-trash.guard';

describe('EngineersTrashGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngineersTrashGuard]
    });
  });

  it('should ...', inject([EngineersTrashGuard], (guard: EngineersTrashGuard) => {
    expect(guard).toBeTruthy();
  }));
});
