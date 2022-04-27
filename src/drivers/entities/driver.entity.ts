import { ApiProperty } from "@nestjs/swagger";

export class Driver {
    @ApiProperty()
    driverId: number;
    @ApiProperty()
    permanentNumber: number;
    @ApiProperty()
    code: string;
    @ApiProperty()
    url: string;
    @ApiProperty()
    givenName: string;
    @ApiProperty()
    familyName: string;
    @ApiProperty()
    dateOfBirth: string;
    @ApiProperty()
    nationality: string;
}
