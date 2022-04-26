import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from "axios";
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() : Promise<Observable<AxiosResponse<Driver>>> {
    return await this.httpService.get("http://ergast.com/api/f1/drivers.json?limit=1000", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.DriverTable.Drivers)
    );
  }

  async findById(id: string) : Promise<Observable<AxiosResponse<Driver>>>{
    return await this.httpService.get("http://ergast.com/api/f1/drivers/" + id + ".json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.DriverTable.Drivers)
    );
  }

  async findByYear(year: number) : Promise<Observable<AxiosResponse<Driver>>>{
    return await this.httpService.get("http://ergast.com/api/f1/" + year +"/drivers.json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.DriverTable.Drivers)
    );
  }

  async findByYearAndRound(year: number, round: number) : Promise<Observable<AxiosResponse<Driver>>>{
    return await this.httpService.get("http://ergast.com/api/f1/" + year +"/" + round + "/drivers.json", {
      headers: {
        'Accept': 'application/json',
      }
    }).pipe(
      map(res => res.data.MRData.DriverTable.Drivers)
    );
  }
}
