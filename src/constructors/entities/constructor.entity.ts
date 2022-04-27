import { ApiProperty } from "@nestjs/swagger";

export class Constructor {
    @ApiProperty()
    constructorId: number;
    @ApiProperty()
    url: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    nationality: string;
}
