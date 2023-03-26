import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(
        private petsService: PetsService
    ) {

    }

    @Query(returns => [Pet])
    async pets() {
        return await this.petsService.findAll();
    }

    @Mutation(returns => Pet)
    async createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet> {
        return await this.petsService.createPet(createPetInput);
    }
}
