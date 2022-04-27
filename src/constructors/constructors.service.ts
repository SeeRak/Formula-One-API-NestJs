import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from "axios";
import { Constructor } from './entities/constructor.entity';

@Injectable()
export class ConstructorsService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() : Promise<Observable<AxiosResponse<Constructor>>> {
    return await this.httpService.get("http://ergast.com/api/f1/constructors.json?limit=1000", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.ConstructorTable.Constructors)
    );
  }

  async findById(id: string) : Promise<Observable<AxiosResponse<Constructor>>>{
    return await this.httpService.get("http://ergast.com/api/f1/constructors/" + id + ".json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.ConstructorTable.Constructors)
    );
  }

  async findByYear(year: number) : Promise<Observable<AxiosResponse<Constructor>>>{
    return await this.httpService.get("http://ergast.com/api/f1/" + year +"/constructors.json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.ConstructorTable.Constructors)
    );
  }

  async findByYearAndRound(year: number, round: number) : Promise<Observable<AxiosResponse<Constructor>>>{
    return await this.httpService.get("http://ergast.com/api/f1/" + year +"/" + round + "/constructors.json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.ConstructorTable.Constructors)
    );
  }
}
