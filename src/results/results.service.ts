import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from "axios";
import { Result } from './entities/result.entity';

@Injectable()
export class ResultsService {
  constructor(private readonly httpService: HttpService) {}
  
  async findRecentRaceResult() : Promise<Observable<AxiosResponse<Result>>> {
    return await this.httpService.get("http://ergast.com/api/f1/current/last/results.json?limit=1000", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.RaceTable.Races)
    );
  }

  async findByYearAndRound(year: number, round: number) : Promise<Observable<AxiosResponse<Result>>>{
    return await this.httpService.get("http://ergast.com/api/f1/" + year +"/" + round + "/results.json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.RaceTable.Races)
    );
  }
}
