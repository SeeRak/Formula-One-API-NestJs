import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from "axios";
import { Circuit } from './entities/circuit.entity';

@Injectable()
export class CircuitsService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() : Promise<Observable<AxiosResponse<Circuit>>> {
    return await this.httpService.get("http://ergast.com/api/f1/circuits.json?limit=1000", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.CircuitTable.Circuits)
    );
  }

  async findById(id: string) : Promise<Observable<AxiosResponse<Circuit>>>{
    return await this.httpService.get("http://ergast.com/api/f1/circuits/" + id + ".json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.CircuitTable.Circuits)
    );
  }

  async findByYear(year: number) : Promise<Observable<AxiosResponse<Circuit>>>{
    return await this.httpService.get("http://ergast.com/api/f1/" + year +"/circuits.json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.CircuitTable.Circuits)
    );
  }

  async findByYearAndRound(year: number, round: number) : Promise<Observable<AxiosResponse<Circuit>>>{
    return await this.httpService.get("http://ergast.com/api/f1/" + year +"/" + round + "/circuits.json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.CircuitTable.Circuits)
    );
  }
}
