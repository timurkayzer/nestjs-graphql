import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
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
    async getPets() {
        return await this.petsService.findAll();
    }

    @Query(returns => Pet)
    async getPetById(@Args('id', { type: () => Int }) id: number) {
        return await this.petsService.findById(id);
    }

    @ResolveField(returns => Owner, { name: "owner" })
    async getOwner(@Parent() pet: Pet) {
        return await this.petsService.getOwner(pet.ownerId);
    }

    @Mutation(returns => Pet)
    async createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet> {
        return await this.petsService.createPet(createPetInput);
    }
}
