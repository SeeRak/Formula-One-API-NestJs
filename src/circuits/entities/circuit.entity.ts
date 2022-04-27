import { ApiExtension, ApiProperty } from "@nestjs/swagger";

export class Circuit {
    @ApiProperty()
    circuitId: string;
    @ApiProperty()
    url: string;
    @ApiProperty()
    circuitName: string;
    @ApiProperty({
        additionalProperties:{
            oneOf:[
                {title: "lat", type: "string"},
                {title: "long", type: "string"},
                {title: "locality", type: "string"},
                {title: "country", type: "string"},
            ]
        }        
    })
    Location:{
        lat:string;
        long:string;
        locality:string;
        country:string;
    }
}
