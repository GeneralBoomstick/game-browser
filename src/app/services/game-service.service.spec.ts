import { TestBed } from '@angular/core/testing';

import { GameInfoService } from './game-info.service';

describe('GameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameInfoService = TestBed.get(GameInfoService);
    expect(service).toBeTruthy();
  });
});
