import { Injectable } from '@nestjs/common';
import { CreateConstructorDto } from './dto/create-constructor.dto';
import { UpdateConstructorDto } from './dto/update-constructor.dto';

@Injectable()
export class ConstructorsService {
  create(createConstructorDto: CreateConstructorDto) {
    return 'This action adds a new constructor';
  }

  findAll() {
    return `This action returns all constructors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} constructor`;
  }

  update(id: number, updateConstructorDto: UpdateConstructorDto) {
    return `This action updates a #${id} constructor`;
  }

  remove(id: number) {
    return `This action removes a #${id} constructor`;
  }
}
