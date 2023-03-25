import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
    async findAll(): Promise<Pet[]> {
        return [];
    }
}
