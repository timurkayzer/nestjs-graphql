import { join } from 'path';
import { DataSourceOptions } from 'typeorm';
import { Pet } from './pets/pet.entity';
import { Owner } from './owners/entities/owner.entity';

const typeOrmConfig: DataSourceOptions = {
  type: 'sqlite',
  database: ':memory:',
  entities: [Pet, Owner],

  synchronize: true,
};
export default typeOrmConfig;
