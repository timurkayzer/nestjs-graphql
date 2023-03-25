import { Query, Resolver } from '@nestjs/graphql';
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
}
