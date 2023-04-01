import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {

    constructor(
        @InjectRepository(Pet) private petRepository: Repository<Pet>
    ) {

    }

    createPet(createPetInput: CreatePetInput): Promise<Pet> {
        const newPet = this.petRepository.create(createPetInput);
        return this.petRepository.save(newPet);
    }

    async getOwner(ownerId: number): Promise<Owner> {
        const pet = await this.petRepository.findOne({
            relations: ['owner'],
            where: { ownerId }
        });

        return pet.owner;
    }

    async findAll(): Promise<Pet[]> {
        return this.petRepository.find();
    }

    async findById(id: number): Promise<Pet> {
        return this.petRepository.findOneOrFail({ where: { id } });
    }
}
