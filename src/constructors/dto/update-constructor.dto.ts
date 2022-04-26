import { PartialType } from '@nestjs/swagger';
import { CreateConstructorDto } from './create-constructor.dto';

export class UpdateConstructorDto extends PartialType(CreateConstructorDto) {}
