import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, interval, map, Observable, startWith } from 'rxjs';
import { Jackpot } from './jackpot';
import { JackpotDto } from './jackpot.dto';
import { JACKPOT_ENDPOINTS } from './jackpot.endpoints';

@Injectable({ providedIn: 'root' })
export class JackpotRepositoryService {

  constructor(private readonly http: HttpClient) {
  }

  jackpots({ refreshPeriod }: { refreshPeriod: number }): Observable<Jackpot[]> {
    const refresh$: Observable<unknown> = interval(refreshPeriod).pipe(startWith(null));

    return refresh$.pipe(
      exhaustMap(() => this.fetchJackpots())
    );
  }

  private fetchJackpots(): Observable<Jackpot[]> {
    return this.http.get<JackpotDto[]>(JACKPOT_ENDPOINTS.JACKPOTS).pipe(
      map(response => response.map(dto => ({
        gameId: dto.game,
        amount: dto.amount
      })))
    );
  }

}

