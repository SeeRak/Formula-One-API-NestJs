import { ApiProperty } from "@nestjs/swagger";
import { title } from "process";
import { Circuit } from "src/circuits/entities/circuit.entity";
import { Constructor } from "src/constructors/entities/constructor.entity";
import { Driver } from "src/drivers/entities/driver.entity";

export class Result {
    @ApiProperty()
    season:string;
    @ApiProperty()
    round:string;
    @ApiProperty()
    url:string;
    @ApiProperty()
    raceName:string;
    @ApiProperty()
    Circuit: Circuit;
    @ApiProperty()
    date:string;
    @ApiProperty()
    time:string;
    @ApiProperty()
    Results: [
        Results,
        FatestLap
    ]
}

export class Time{
    @ApiProperty()
    millis: string;
    @ApiProperty()
    time: string;
}

export class Results {
    number:string;
    @ApiProperty()
    position:string;
    @ApiProperty()
    positionText:string;
    @ApiProperty()
    points:string;
    @ApiProperty()
    Driver: Driver;
    @ApiProperty()
    Constructor: Constructor;
    @ApiProperty()
    grid: string;
    @ApiProperty()
    laps: string;
    @ApiProperty()
    status: string;
    @ApiProperty()
    Time: Time
}


export class AverageSpeed{
    @ApiProperty()
    units: string;
    @ApiProperty()
    speed: string;
}

export class FatestLap{
    @ApiProperty()
    rank: string;
    @ApiProperty()
    lap: string;
    @ApiProperty()
    Time: Time
    @ApiProperty()
    AverageSpeed: AverageSpeed
}

